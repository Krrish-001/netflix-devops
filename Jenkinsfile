pipeline {
    agent any

    stages {
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
                sh 'sleep 10'
                sh 'curl http://host.docker.internal:5050'
            }
        }
    }
}