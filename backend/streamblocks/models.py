# streamblocks/models.py
from django.db import models


# one object
class RichText(models.Model):
    text = models.TextField(blank=True, null=True)

    block_template = "streamblocks/richtext.html"

    def __str__(self):
        # This text will be added to block title name.
        # For better navigation when block is collapsed.
        return self.text[:30]

    class Meta:
        # This will use as name of block in admin
        # See also STREAMFIELD_BLOCK_TITLE in settings
        verbose_name = "Text"


# list of objects
class ImageWithText(models.Model):
    image = models.ImageField(upload_to="images/")
    text = models.TextField(null=True, blank=True)

    # StreamField option for list of objects
    as_list = True

    block_template = "streamblocks/imagewithtext.html"

    def __str__(self):
        # This text will be added to block title name.
        # For better navigation when block is collapsed.
        return self.text[:30]

    class Meta:
        verbose_name = "Image with text"
        verbose_name_plural = "Images with text"


# Register blocks for StreamField as list of models
STREAMBLOCKS_MODELS = [
    RichText,
    ImageWithText
]
