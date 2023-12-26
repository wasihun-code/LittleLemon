from datetime import datetime

from django.test import TestCase
from .models import Menu, Booking


# Create your tests here.
class MenuTest(TestCase):
    def test_get_item(self):
        item = Menu.objects.create(title="Lemonade", price=20.75, inventory=2)
        item_str = item.__str__()

        self.assertEqual(item_str, "Lemonade - $20.75")


class BookingTest(TestCase):
    def test_get_item(self):
        item = Booking.objects.create(
                name="MU 2",
                n_guests=20,
                booking_date=datetime.today()
        )
        item_str = item.__str__()

        self.assertEqual(item_str, "MU 2 - 20 guests")
