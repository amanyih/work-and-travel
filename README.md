# Work & Travel

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/amanyih/work-and-travel
   cd work-and-travel
   ```

### Running Locally (without Docker)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`.

### Running with Docker

1. Build the Docker image:
   ```bash
   docker build -f Dockerfile -t work-and-travel .
   ```
2. Run the Docker container:

   ```bash
    docker run -p 5173:5173 work-and-travel
   ```

3. Open your browser and navigate to `http://localhost:5173`.
