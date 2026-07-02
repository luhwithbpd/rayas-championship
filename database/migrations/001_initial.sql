-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE user_role AS ENUM (
    'admin',
    'manager'
);

CREATE TYPE match_status AS ENUM (
    'scheduled',
    'ongoing',
    'finished',
    'cancelled'
);

CREATE TYPE match_event_type AS ENUM (
    'goal',
    'assist',
    'own_goal',
);

-- ============================================
-- Extensões
-- ============================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- Usuários
-- ============================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'admin',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================
-- Campeonatos
-- ============================================

CREATE TABLE championships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    season VARCHAR(30),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================
-- Times
-- ============================================

CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    championship_id UUID NOT NULL REFERENCES championships(id) ON DELETE CASCADE,
    name VARCHAR(120) NOT NULL,
    logo_url TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================
-- Jogadores
-- ============================================

CREATE TABLE players (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    birth_date DATE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================
-- Jogadores inscritos em um time
-- ============================================

CREATE TABLE team_players (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    player_id UUID NOT NULL REFERENCES players(id) ON DELETE CASCADE,

    shirt_number INTEGER,
    position VARCHAR(30),

    UNIQUE(team_id, player_id)
);

-- ============================================
-- Partidas
-- ============================================

CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    championship_id UUID NOT NULL REFERENCES championships(id),

    home_team_id UUID NOT NULL REFERENCES teams(id),

    away_team_id UUID NOT NULL REFERENCES teams(id),

    home_score INTEGER DEFAULT 0,
    away_score INTEGER DEFAULT 0,

    played_at TIMESTAMP,

    status VARCHAR(20) DEFAULT 'scheduled'
);

-- ============================================
-- Eventos
-- ============================================

CREATE TABLE match_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    match_id UUID NOT NULL REFERENCES matches(id) ON DELETE CASCADE,

    player_id UUID REFERENCES players(id),

    assist_player_id UUID REFERENCES players(id),

    minute INTEGER,

    type VARCHAR(30) NOT NULL,

    description TEXT
);