pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/krrish-001/netflix-devops.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                docker-compose down || true
                docker-compose up -d --build
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                sleep 10
                curl -f http://localhost:5050 || exit 1
                '''
            }
        }
    }
}