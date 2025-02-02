# Tap Journal Backend

We created Tap Journal as a platform where you make your journal entries.
Using Fine-tuned LLMs, we perform RAG on your content and allow you to find insights for you and your therapist.
Make the most out of your therapy sessions by asking your therapist the right questions.

This intends to be the singular backend for the project (for now).
This project is the server that hosts the Database backend and provides endpoints for

- fast data retrieval
- data analysis via LLMs

## Features

- Hosts a Postgres Database
- Connects to OpenAI API
- Provides endpoints for fast data access

## ER Relationship Diagram

This is the ER Diagram for the Postgres Database that was then converted to Relational Tables
![Alt text](./er_diagram.png)

This is the final database schema that has been decided upon. It will be followed in the creation of the Postgres Database
![Alt text](./database_schema.png)

## Installation

Steps to set up and run your project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
