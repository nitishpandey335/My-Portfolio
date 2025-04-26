pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                // ye step Jenkins automatic kar leta hai agar Git setup sahi hai
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm run build'
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                echo 'Deploying to GitHub Pages...'
                sh 'npm run deploy'
            }
        }
    }
}
