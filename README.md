# Task Manager

A task management application built with Django to help users manage and organize their tasks.

## Getting Started

Follow the instructions below to set up the project on your local machine.

### Prerequisites

Ensure that you have the following installed on your machine:

- **Python** (version 3.8 or later)
- **Git** for cloning the repository

### Installation

1. **Clone the Repository**

   Open your terminal or command prompt and run the following command to clone the project from GitHub:

   ```bash
   git clone https://github.com/Momin9/task_manager.git

2. **Navigate to the Project Directory**
   ```sh
    cd task_manager
    

3. **Create a Virtual Environment**
   
    On Linux/Mac:
      
        python3 -m venv .venv
    On Windows:
   
        python -m venv .venv

4. **Activate the Virtual Environment**
   
    On Linux/Mac:

        source .venv/bin/activate

    On Windows:

        .venv\Scripts\activate

5. **Install Dependencies**

   ```sh
    pip install -r requirements.txt

6. **Run Migrations**

   ```sh
    python manage.py migrate

7. **Run the Project**

    ```sh
    python manage.py runserver

