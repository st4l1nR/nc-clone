import 'dotenv/config';
import AWS from 'aws-sdk';
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
});

export default async function deleteImages(urls: string[]) {
  await Promise.all(
    urls.map(async (attachment: any) => {
      const Key = attachment.split('/').slice(-1)[0];
      return await s3
        .deleteObject({
          Bucket: process.env.AWS_S3_BUCKET_NAME as string,
          Key,
        })
        .promise();
    })
  );
}
