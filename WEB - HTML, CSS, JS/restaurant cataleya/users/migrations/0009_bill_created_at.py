# Generated by Django 3.2.8 on 2021-11-29 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_profile_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='bill',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]