
-- user
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
	"email" VARCHAR(255),
	"auth_token" VARCHAR(255),
	"auth_token_sent_at" TIMESTAMPTZ,
	"access_group" VARCHAR(255),
	"investor_id" INTEGER REFERENCES "user"
);

-- section
CREATE TABLE "section" (
	"id" SERIAL PRIMARY KEY,
	"section" VARCHAR(255)
);

INSERT INTO "section" ("section")
VALUES ('Introduction'), ('Team'), ('Business Model'), ('Product and Market'), ('IP and Legal');

-- question
CREATE TABLE "question" (
	"id" SERIAL PRIMARY KEY,
	"question" VARCHAR(500) NOT NULL,
	"created_at" TIMESTAMPTZ,
	"updated_at" TIMESTAMPTZ, 
	"active" BOOLEAN DEFAULT FALSE,
	"position" INTEGER,
	"section_id" INTEGER REFERENCES "section"
);

-- choice
CREATE TABLE "choice" (
	"id" SERIAL PRIMARY KEY,
	"question_id" INTEGER REFERENCES "question",
	"choice" VARCHAR(500),
	"position" INTEGER
);

-- response
CREATE TABLE "response" (
	"id" SERIAL PRIMARY KEY,
	"question_id" INTEGER REFERENCES "question",
	"response" VARCHAR(500),
	"user_id" INTEGER REFERENCES "user",
	"created_at" TIMESTAMPTZ,
	"updated_at" TIMESTAMPTZ
);

-- submission
CREATE TABLE "submission" (
	"id" SERIAL PRIMARY KEY,
	"completed" BOOLEAN DEFAULT FALSE,
	"completed_at" TIMESTAMPTZ,
	"requested_at" TIMESTAMPTZ,
	"founder_id" INTEGER REFERENCES "user",
	"cfi_id" INTEGER REFERENCES "user",
	"report" VARCHAR(1000),
	"valuation" VARCHAR(255)
);