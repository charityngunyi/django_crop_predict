# Generated by Django 2.1.3 on 2019-04-10 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Comments', '0002_auto_20190410_1131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='body',
            field=models.TextField(),
        ),
    ]