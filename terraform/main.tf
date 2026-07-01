# ============================================
# FoodExpress — AWS Infrastructure with Terraform
# ============================================
# Provider: AWS
# Region: ap-south-1 (Mumbai)
# Architecture: VPC → ALB → EC2 (Docker) → MongoDB Atlas
# ============================================

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote state backend (uncomment and configure for production)
  # backend "s3" {
  #   bucket         = "foodexpress-terraform-state"
  #   key            = "prod/terraform.tfstate"
  #   region         = "ap-south-1"
  #   dynamodb_table = "terraform-state-lock"
  #   encrypt        = true
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "FoodExpress"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}
