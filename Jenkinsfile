pipeline{
  agent any
  environment {
    CI = 'true'
  }

  stages {
    stage ('Install dependencies react project'){
      steps {
        echo 'Start install dependencies react project'
        sh 'npm install'
      }
    }
    stage('Test project'){
      steps {
        echo "disini akan kita testing"
      }
    }
    stage(' Build project react'){
      steps{
        sh 'npm run build'
      }
    }
  }
}