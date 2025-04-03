import './App.css'
import { use, useState } from 'react';

const products = [
  { id: 1, name: 'Áo thun trắng', price: 150000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab' },
  { id: 2, name: 'Quần jeans xanh', price: 300000, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d' },
  { id: 3, name: 'Tai nghe không dây', price: 500000, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df' },
  { id: 4, name: 'Sạc dự phòng', price: 200000, image: 'https://images.unsplash.com/photo-1706275399524-813e89914e43' },
  { id: 5, name: 'Giày thể thao', price: 450000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: 6, name: 'Áo khoác', price: 350000, image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3' },
  { id: 7, name: 'Mũ lưỡi trai', price: 100000, image: 'https://images.unsplash.com/photo-1560774358-d727658f457c' },
  { id: 8, name: 'Đồng hồ thể thao', price: 600000, image: 'https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19' },
  { id: 9, name: 'Ba lô du lịch', price: 400000, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
  { id: 10, name: 'Kính râm thời trang', price: 250000, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f' },
  { id: 11, name: 'Bình nước giữ nhiệt', price: 180000, image: 'https://images.unsplash.com/photo-1648919725390-1eec35fdf32c' },
  { id: 12, name: 'Ốp lưng điện thoại', price: 80000, image: 'https://images.unsplash.com/photo-1593055454503-531d165c2ed8' },
];

function App() {
  // Add to cart Function
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    }
    )
  }

  // Show cart function
  const [isCartShown, setIsCartShown] = useState(false)

  const showCart = () => {
    setIsCartShown((prev) => !prev)
  }

  return (
    <main>
      <div className='fixed top-0 right-0 w-full shadow-md z-10'>
        {/* Header */}
        <div className='flex justify-end p-4'>
          <button className=' px-4 py-2 rounded' onClick={showCart}>Giỏ hàng 🛒</button>
        </div>

        {/* Cart */}
        {
          isCartShown ? (
            <div className='absolute top-16 right-4 rounded shadow-lg px-4 w-80 z-20'>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className='flex items-center mb-4 py-2'>
                    <div className='h-14 w-14 mr-4'>
                      <img src={item.image} alt={item.name} title={item.name} className='h-full w-full object-cover rounded-lg' />
                    </div>
                    <div className='text-left flex-1'>
                      <p className='font-semibold'>{item.name}</p>
                      <p className='text-sm'>Thành tiền: {item.price} x {item.quantity} = {item.price * item.quantity} VND</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Giỏ hàng trống</p>
              )}
            </div>
          ) : (
            <div></div>
          )
        }

      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-center mt-24">
        {products.map((item) => (
          <div key={item.id} className='w-64 p-4'>
            <div className='h-64'>
              <img src={item.image} alt={item.name} title={item.name} className='h-full w-full object-cover rounded-lg' />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <div className='text-left'>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-sm'>{item.price} VND</p>
              </div>
              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={() => addToCart(item)}>🛒</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
