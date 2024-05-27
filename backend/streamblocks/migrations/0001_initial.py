# Generated by Django 5.0.6 on 2024-05-26 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ImageWithText',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('text', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Image with text',
                'verbose_name_plural': 'Images with text',
            },
        ),
        migrations.CreateModel(
            name='RichText',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Text',
            },
        ),
    ]
