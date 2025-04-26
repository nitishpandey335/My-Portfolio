pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/nitishpandey335/My-Portfolio.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                bat 'npm run deploy'
            }
        }
    }
}
