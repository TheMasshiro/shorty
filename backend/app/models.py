class URL:
    def __init__(self, id, url, short_code, updated_at):
        self.id = id
        self.url = url
        self.short_code = short_code
        self.updated_at = updated_at

    def __repr__(self):
        return f"<id = {self.id}, url = {self.url}, short code = {self.short_code}>"

    def short_url(self):
        pass
