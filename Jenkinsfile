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
                docker stop netflix-app || true
                docker rm netflix-app || true

                docker build -t netflix-app .

                docker run -d -p 8082:80 --name netflix-app netflix-app
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                sleep 10
                curl -f http://host.docker.internal:8082 || exit 1
                '''
            }
        }
    }
}