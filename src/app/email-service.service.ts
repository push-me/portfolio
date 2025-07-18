import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  private ses: AWS.SES;

  constructor() {
    // Configure AWS SDK
    AWS.config.update({
      region: 'eu-central-1', // e.g., 'us-east-1'
      accessKeyId: '',
      secretAccessKey: ''
    });

    this.ses = new AWS.SES({ apiVersion: '2010-12-01' });
  }

  sendEmail(to: string, subject: string, body: string): Promise<any> {
    const params = {
      Source: 'my domain',
      Destination: {
        ToAddresses: [to]
      },
      Message: {
        Subject: {
          Data: subject
        },
        Body: {
          Text: {
            Data: body
          }
        }
      }
    };

    return this.ses.sendEmail(params).promise();
  }
}
