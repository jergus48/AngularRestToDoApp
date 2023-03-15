# Generated by Django 4.0.6 on 2023-03-13 20:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_tasks_todolist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='complete',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='todolist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='api.list'),
        ),
    ]
