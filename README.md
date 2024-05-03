# OpenFn Training homework

## Installation
Follow the CLI installation [instructions](https://docs.openfn.org/documentation/cli).

Create a `tmp` directory in each of the homework folders. Create the `output.json` files in each `tmp` directory to save state from runs.

## Configuration
To make a request to the `jsonplaceholder.typicode.com` as in `homework-job-writing`, create an `emr-credential.json` file in the `tmp` directory

```json
{
    
    "baseUrl": "https://jsonplaceholder.typicode.com"
    
}
```


To connect to SurveyCTO as in `homework-openfn-platform`, create a file named `surveycto-creds.json` in the `tmp` directory with the format
```json
{
    "servername": "your-servername",
    "username": "your-username",
    "password": "your-password"
}
```

To connect to Salesforce, create a file named `sf-credential.json` in the both `tmp` directories with the format

```json
{
    "loginUrl": "https://login.salesforce.com/",
    "username": "your-username",
    "password": "your-password",
    "securityToken": "your-security-token"
}
```

## Workflow execution
Run `openfn workflow.json -o tmp/output.json` in one of the homework folders  
