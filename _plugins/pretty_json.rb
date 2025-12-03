require "json"

module Jekyll
  module PrettyJson
    def pretty_json(obj)
      JSON.pretty_generate(obj)
    end
  end
end

Liquid::Template.register_filter(Jekyll::PrettyJson)