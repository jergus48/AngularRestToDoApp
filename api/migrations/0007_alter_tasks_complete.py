# Generated by Django 4.0.6 on 2023-03-14 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_daily_complete'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='complete',
            field=models.CharField(default=False, max_length=6),
        ),
    ]