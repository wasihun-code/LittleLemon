from django.db import models


# Create your models here.
class Booking(models.Model):
    name = models.CharField(max_length=255)
    n_guests = models.SmallIntegerField(default=0)
    booking_date = models.DateField()

    def __str__(self):
        return f"{self.name} - {self.n_guests} on {self.booking_date}"


class Menu(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    inventory = models.SmallIntegerField(default=0)

    def __str__(self):
        return f"{self.title} - ${self.price}"
