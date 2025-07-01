provider "heroku" {}

resource "heroku_app" "staging_app" {
  name = "audiadichotics-staging"
  region = "us"
}

resource "heroku_addon" "postgres" {
  app = heroku_app.staging_app.id
  plan = "heroku-postgresql:essential-0"
}

variable "app_quantity" {
  default = null
}

variable "process_types" {
  default = {
    "web": {
      size = "Basic"
    },
    "worker": {
      size = "Basic"
    }
  }
}

resource "heroku_formation" "dynos"{
  for_each = var.process_types
  app = heroku_app.staging_app.id
  type = each.key
  quantity = var.app_quantity
  size = each.value.size
}
