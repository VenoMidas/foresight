
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

INSERT INTO "question" ("question", "active", "position", "section_id") 
VALUES ('Company Name:', TRUE, '1', '1'),
('Founder(s) Name(s):', TRUE, '2', '1'),
('Founder Email:', TRUE, '3', '1'),
('Headquarter Location:', TRUE, '4', '1'),
('Website:', TRUE, '5', '1'),
('How many founders does the company have?', TRUE, '1', '2'),
('How much did the founders invest in the company in terms of capital collectively so far?', TRUE, '2', '2'),
('Is the majority of the founders involved in other companies or occupations?', TRUE, '3', '2'),
('What is the average age of the founders?', TRUE, '4', '2'),
('Has any of the founders have previous entrepreneurial experience?', TRUE, '5', '2'),
('How many employees work for the company? (excluding founders, interns, and freelancers)', TRUE, '6', '2'),
('How long have the members of the core team workd (or studied together)?', TRUE, '7', '2'),
('How many years of relevant industry experience does the core team have collectively?', TRUE, '8', '2'),
('Does any of the core team have business and managerial background?', TRUE, '9', '2'),
('Does the core team have all the main technical skills? (ie web development for online services)', TRUE, '10', '2'),
('Is the business scalable? (Can you significantly increase revenue without increasing costs)', TRUE, '1', '3'),
('The company''s main business model is:', TRUE, '2', '3'),
('Which stage of development are you facing now?', TRUE, '3', '3'),
('Is the company sustainably breakeven?', TRUE, '4', '3'),
('Does the company have a board of advisors?', TRUE, '5', '3'),
('How many advisors/board members?', TRUE, '6', '3'),
('Indicate which if any, of the following entities are sareholders of the company?', TRUE, '7', '3'),
('Does the company offer valuable exit strategies to investors?', TRUE, '8', '3'),
('In which country is the company based?', TRUE, '1', '4'),
('What industry is your product in? (Select all that apply)', TRUE, '2', '4'),
('How would you define the status of the product/service roll out?', TRUE, '3', '4'),
('Has the demand for the proposed product/service been tested?', TRUE, '4', '4'),
('What is the current size of your Total Addressable Market?', TRUE, '5', '4'),
('How high are the barriers to entry of the market the company is targeting for potential competitors? (The effort/cost that must be sustained by a potential competitor to enter the market)', TRUE, '6', '4'),
('How would you define the level of competition in your targeted market?', TRUE, '7', '4'),
('Existing competitive products/services are:', TRUE, '8', '4'),
('How would you define your product compared to the ones of existing competitors?', TRUE, '9', '4'),
('How do you relate to international competition?', TRUE, '10', '4'),
('Do you plan international expansion?', TRUE, '11', '4'),
('How is the average trend of feedback received so far from early adopters/industry experts?', TRUE, '12', '4'),
('How would you define the degree of loyalty of your customers?', TRUE, '13', '4'),
('How strong are the relationships with key strategic partners (including distributors, suppliers)', TRUE, '14', '4'),
('When was the company started?', TRUE, '1', '5'),
('Has the legal entity been incorporated?', TRUE, '2', '5'),
('Year of Incorporation:', TRUE, '3', '5'),
('Can the company and its founders already depend on the support of external legal consultants?', TRUE, '4', '5'),
('Which kind of Intellectual Property (IP) applies to the product/service?', TRUE, '5', '5'),
('How would you define the current stage of development of your IP?', TRUE, '6', '5');

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