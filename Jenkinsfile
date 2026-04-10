pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                cleanWs()
            }
        }

        stage('Build & Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'DOCKER_BUILDKIT=0 docker-compose up -d --build'
            }
        }

        stage('Test') {
            steps {
                sh 'sleep 10'
                sh 'curl http://host.docker.internal:5050'
            }
        }
    }
}