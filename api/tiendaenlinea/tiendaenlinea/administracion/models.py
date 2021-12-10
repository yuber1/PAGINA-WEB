from django.db import models

# Create your models here.
class producto(models.Model):
    nombre = models.CharField(max_length=100,null=False)
    precio= models.DecimalField(max_digits=None)
    descripcion=models.TextField(blank=True,null=True)
