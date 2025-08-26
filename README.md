# Kurshanteringssystem

Ett webbbaserat system för att hantera och visa kurser, byggt med Node.js, Express och PostgreSQL.

## Funktioner

- **Visa kurser** - Lista alla sparade kurser
- **Lägg till kurser** - Formulär för att lägga till nya kurser
- **Ta bort kurser** - Ta bort kurser med bekräftels-ruta
- **Responsiv design** - Fungerar på alla enheter
- **Databaslagring** - Lagring i PostgreSQL

## Installation

### 1. Klona projektet

```
git clone https://github.com/ellenliden/DT207G_moment1.git
cd DT207G_moment1
```

### 2. Installera beroenden

```
npm install
```

### 3. Konfigurera miljövariabler

Skapa en .env-fil i projektets rot med följande innehåll:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=ditt_användarnamn
DB_PASSWORD=ditt_lösenord
DB_DATABASE=ditt_databasnamn
```

### 4. Skapa databasen

Kör installations-skriptet för att skapa tabellen:

```
node install.js
```

### 5. Starta servern

```
node server.js
```

Servern kommer att köra på http://localhost:3000

## Databas

### Tabellstruktur

```
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    code VARCHAR(64) NOT NULL,
    progression VARCHAR(64) NOT NULL,
    syllabus VARCHAR(255) NOT NULL
);
```

### Databas-export

database_export.sql - Detta SQL-skript innehåller alla kommandon för att skapa databasen, tabellen courses, samt fylla den med startdata.

Filen kan användas för att återskapa databasen med följande kommando:

```
psql -U användarnamn -d databasnamn -f database_export.sql
```

Ersätt `användarnamn` och `databasnamn` med dina egna uppgifter.

### Backup och säkerhet

Export av databas/installations-skript. För att kunna säkerställa dataintegritet har en backup av databasen skapats via pgAdmin4. Denna backup innehåller:

- **Tabellstruktur** - CREATE TABLE-kommandon
- **Startdata** - Exempel på kurser
- **Konfiguration** - Databasinställningar

Backup-filen (`database_export.sql`) används i detta fall för att dela projektet. Skulle även kunna användas för att återställa databasen vid fel.

## ER-diagram

ER-diagrammet som beskriver databasens struktur heter `er-diagram.drawio`

## API-endpoints

- `GET /` - Visa alla kurser
- `GET /add-course` - Visa formulär för att lägga till kurs
- `POST /add-course` - Spara ny kurs
- `POST /delete-course/:id` - Ta bort kurs
- `GET /about` - Om oss-sida

## Deployment

### Render

1. Koppla GitHub-repo till Render
2. Konfigurera miljövariabler i Render
3. Deploya automatiskt vid push

### Lokal utveckling

```
npm start
```

## Validering

- **Serverside validering** av alla formulärfält
- **Tydliga felmeddelanden** vid saknad data
- **Databasfelhantering** med try-catch

## Funktionella krav

- Fungerande webbplats för att se och lägga till kurser
- Databas med tabell och ER-diagram
- Data lagras med SQL
- Input-validering på serversidan
- Responsiv design med HTML/CSS

## Utvecklare

Ellen Lidén - Backend-baserad webbutveckling, Moment 1
