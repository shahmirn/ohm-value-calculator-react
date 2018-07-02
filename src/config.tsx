// based on: https://serverless-stack.com/chapters/environments-in-create-react-app.html

const dev = {
    apiGateway: {
        URL: "http://localhost:56111"
    }
};

const prod = {
    apiGateway: {
        URL: "https://ohmvaluecalculator.azurewebsites.net"
    }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
    ...config
};
