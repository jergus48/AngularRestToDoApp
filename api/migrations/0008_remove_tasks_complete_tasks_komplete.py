# Generated by Django 4.0.6 on 2023-03-14 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_tasks_complete'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='complete',
        ),
        migrations.AddField(
            model_name='tasks',
            name='komplete',
            field=models.BooleanField(default=False),
        ),
    ]
