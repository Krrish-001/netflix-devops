pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Krrish-001/netflix-devops.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }

        stage('Test') {
            steps {
                sh 'sleep 10'
                sh 'curl http://localhost:5050'
            }
        }
    }
}