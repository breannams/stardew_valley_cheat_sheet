json.extract! quest, :id, :type, :name, :description, :started_by, :requirements, :rewards, :created_at, :updated_at
json.url quest_url(quest, format: :json)
