# Generated by Django 4.0.6 on 2023-03-14 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_daily_lastchecked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='daily',
            name='time',
            field=models.TimeField(null=True),
        ),
    ]
