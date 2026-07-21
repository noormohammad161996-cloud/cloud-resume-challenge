output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket_id" {
  value = aws_s3_bucket.resume_bucket.id
}