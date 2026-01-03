function orderWhatsApp(productName) {
  const phoneNumber = "201020508423"; // رقم واتساب بدون + أو 0
  const message = `أهلاً، أريد طلب ${productName} بالجملة.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}