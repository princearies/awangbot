import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeTab, setActiveTab] = useState('telegram')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-purple-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">🤖</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AwangBot78</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#produk" className="text-sm text-gray-300 hover:text-white transition-colors">Produk</a>
              <a href="#harga" className="text-sm text-gray-300 hover:text-white transition-colors">Harga</a>
              <a href="#fitur" className="text-sm text-gray-300 hover:text-white transition-colors">Fitur</a>
              <a href="#hubungi" className="text-sm text-gray-300 hover:text-white transition-colors">Hubungi</a>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Order Sekarang
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#produk" onClick={() => setMobileMenu(false)} className="block text-gray-300 hover:text-white py-2">Produk</a>
              <a href="#harga" onClick={() => setMobileMenu(false)} className="block text-gray-300 hover:text-white py-2">Harga</a>
              <a href="#fitur" onClick={() => setMobileMenu(false)} className="block text-gray-300 hover:text-white py-2">Fitur</a>
              <a href="#hubungi" onClick={() => setMobileMenu(false)} className="block text-gray-300 hover:text-white py-2">Hubungi</a>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg text-sm font-medium">
                Order Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Bot Active & Ready 24/7</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">Bot Premium</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Telegram & WhatsApp</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dapatkan bot automation terbaik untuk bisnes anda. Auto-reply, auto-send, group management, dan banyak lagi. Deploy di Cloudflare Workers untuk prestasi maksimum.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#produk" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/25">
              🛒 Lihat Produk
            </a>
            <a href="#hubungi" className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors backdrop-blur-sm">
              💬 Hubungi Kami
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-500">Bot Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">24/7</div>
              <div className="text-xs sm:text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Produk Bot Kami</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Pilih bot yang sesuai untuk keperluan bisnes anda</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-800/50 rounded-xl p-1 border border-gray-700/50">
              <button 
                onClick={() => setActiveTab('telegram')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'telegram' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                📱 Telegram Bot
              </button>
              <button 
                onClick={() => setActiveTab('whatsapp')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'whatsapp' ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                💬 WhatsApp Bot
              </button>
              <button 
                onClick={() => setActiveTab('lain')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'lain' ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                ⚡ Lain-lain
              </button>
            </div>
          </div>

          {/* Product Cards */}
          {activeTab === 'telegram' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                icon="🤖"
                title="Auto Reply Bot"
                description="Bot auto-reply 24/7 untuk channel & group Telegram. Support text, gambar, dan media."
                features={['Auto-reply custom', 'Multi-channel', 'Schedule message', 'Database integration']}
                price="RM 49"
                badge="Popular"
                gradient="from-purple-600 to-blue-500"
              />
              <ProductCard
                icon="📢"
                title="Broadcast Bot"
                description="Hantar mesej broadcast ke ribuan subscriber sekaligus. Support delay & personalization."
                features={['Mass broadcast', 'Personalized message', 'Delay timer', 'Analytics dashboard']}
                price="RM 79"
                badge="Best Seller"
                gradient="from-blue-600 to-cyan-500"
              />
              <ProductCard
                icon="🛡️"
                title="Group Guard Bot"
                description="Moderasi group automatik. Anti-spam, anti-flood, welcome message, dan filter kata."
                features={['Anti-spam', 'Welcome message', 'Word filter', 'User management']}
                price="RM 39"
                badge=""
                gradient="from-indigo-600 to-purple-500"
              />
              <ProductCard
                icon="💰"
                title="Payment Bot"
                description="Bot pembayaran automatik. Terima payment & hantar produk secara auto."
                features={['Auto payment', 'Auto delivery', 'Invoice generator', 'Multi-gateway']}
                price="RM 99"
                badge="Premium"
                gradient="from-yellow-600 to-orange-500"
              />
              <ProductCard
                icon="📊"
                title="Analytics Bot"
                description="Track statistik channel/group. Member growth, engagement, dan performance report."
                features={['Member tracking', 'Engagement stats', 'Daily report', 'Export data']}
                price="RM 59"
                badge=""
                gradient="from-green-600 to-teal-500"
              />
              <ProductCard
                icon="🎮"
                title="Game Bot"
                description="Bot mini-game untuk engagement. Quiz, trivia, dan game interaktif dalam group."
                features={['Quiz game', 'Leaderboard', 'Multi-player', 'Custom questions']}
                price="RM 69"
                badge="New"
                gradient="from-pink-600 to-rose-500"
              />
            </div>
          )}

          {activeTab === 'whatsapp' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                icon="💬"
                title="WA Auto Reply"
                description="Bot auto-reply WhatsApp. Reply mesej masuk secara automatik dengan template custom."
                features={['Auto-reply', 'Template message', 'Media support', 'Contact management']}
                price="RM 59"
                badge="Popular"
                gradient="from-green-600 to-emerald-500"
              />
              <ProductCard
                icon="📤"
                title="WA Bulk Sender"
                description="Hantar mesej bulk ke nombor WhatsApp. Support personalization & scheduling."
                features={['Bulk send', 'Personalize', 'Schedule', 'Delivery report']}
                price="RM 89"
                badge="Best Seller"
                gradient="from-emerald-600 to-teal-500"
              />
              <ProductCard
                icon="🏪"
                title="WA Shop Bot"
                description="Bot kedai WhatsApp. Katalog produk, order, dan payment dalam satu bot."
                features={['Product catalog', 'Order system', 'Payment gateway', 'Receipt auto-send']}
                price="RM 119"
                badge="Premium"
                gradient="from-teal-600 to-cyan-500"
              />
              <ProductCard
                icon="📋"
                title="WA Form Bot"
                description="Bot form & survey WhatsApp. Kumpul data dari customer secara automatik."
                features={['Multi-step form', 'Data collection', 'Auto-summary', 'Export CSV']}
                price="RM 49"
                badge=""
                gradient="from-cyan-600 to-blue-500"
              />
              <ProductCard
                icon="🔔"
                title="WA Reminder Bot"
                description="Bot reminder & notification. Hantar reminder automatik ke customer."
                features={['Scheduled reminder', 'Custom message', 'Recurring', 'Multi-contact']}
                price="RM 39"
                badge="New"
                gradient="from-blue-600 to-indigo-500"
              />
              <ProductCard
                icon="🤝"
                title="WA CRM Bot"
                description="Bot CRM untuk WhatsApp. Track customer, follow-up, dan manage leads."
                features={['Customer tracking', 'Follow-up auto', 'Lead management', 'Report']}
                price="RM 149"
                badge="Enterprise"
                gradient="from-indigo-600 to-purple-500"
              />
            </div>
          )}

          {activeTab === 'lain' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                icon="🌐"
                title="Webhook Bot"
                description="Bot webhook integration. Connect dengan mana-mana API & service untuk automation."
                features={['Custom webhook', 'API integration', 'Event trigger', 'JSON support']}
                price="RM 69"
                badge="Dev"
                gradient="from-orange-600 to-red-500"
              />
              <ProductCard
                icon="🔗"
                title="Multi-Platform Bot"
                description="Bot multi-platform. Satu bot untuk Telegram, WhatsApp, dan Discord serentak."
                features={['Multi-platform', 'Unified dashboard', 'Cross-message', 'Shared database']}
                price="RM 199"
                badge="Ultimate"
                gradient="from-red-600 to-pink-500"
              />
              <ProductCard
                icon="⚙️"
                title="Custom Bot"
                description="Bot custom ikut keperluan anda. Bincang feature & kami build untuk anda."
                features={['Custom feature', 'Full source code', 'Documentation', '1 month support']}
                price="RM 299+"
                badge="Custom"
                gradient="from-pink-600 to-purple-500"
              />
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Kenapa Pilih Kami?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Teknologi terkini untuk bot yang laju, stabil, dan selamat</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="⚡"
              title="Laju & Stabil"
              description="Deploy di Cloudflare Workers. Response time < 100ms. 99.9% uptime guarantee."
            />
            <FeatureCard
              icon="🔒"
              title="Selamat & Private"
              description="Data encrypted. Source code private. Database selamat di server anda sendiri."
            />
            <FeatureCard
              icon="🔄"
              title="Auto Update"
              description="Free update untuk semua bot. Feature baru ditambah secara berkala."
            />
            <FeatureCard
              icon="📱"
              title="Mesra Mobile"
              description="Dashboard responsive. Monitor & manage bot dari smartphone bila-bila masa."
            />
            <FeatureCard
              icon="🗄️"
              title="Database Integration"
              description="Support Supabase, PostgreSQL, MongoDB. Data tersimpan dengan selamat."
            />
            <FeatureCard
              icon="🔌"
              title="Webhook Ready"
              description="Semua bot support webhook. Connect dengan Zapier, Make, atau custom API."
            />
            <FeatureCard
              icon="📦"
              title="Source Code"
              description="Dapat full source code. Host di GitHub. Deploy ke Cloudflare Workers/Pages."
            />
            <FeatureCard
              icon="💬"
              title="Support 24/7"
              description="Team support sedia membantu. Response cepat via Telegram & WhatsApp."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pakej Harga</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Pilih pakej yang sesuai dengan bajet anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="RM 49"
              period="/bot"
              description="Sesuai untuk beginner"
              features={['1 Bot pilihan', 'Source code', 'Basic setup', '7 hari support', 'Community access']}
              gradient="from-gray-700 to-gray-600"
              popular={false}
            />
            <PricingCard
              title="Pro"
              price="RM 149"
              period="/3 bot"
              description="Paling popular!"
              features={['3 Bot pilihan', 'Source code', 'Full setup', '30 hari support', 'Priority support', 'Free updates 3 bulan', 'Webhook integration']}
              gradient="from-purple-600 to-cyan-500"
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="RM 399"
              period="/unlimited"
              description="Untuk bisnes besar"
              features={['Unlimited bot', 'Source code', 'Full setup + deploy', '90 hari support', 'Dedicated support', 'Free updates 1 tahun', 'Custom webhook', 'Database setup', 'Cloudflare deploy']}
              gradient="from-orange-600 to-yellow-500"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Hono', 'Cloudflare Workers', 'Cloudflare Pages', 'TypeScript', 'Supabase', 'GitHub', 'Telegram API', 'WhatsApp API', 'Webhook', 'REST API'].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-gray-300 hover:border-purple-500/50 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="hubungi" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Hubungi Kami</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Ada soalan? Nak order? Hubungi kami sekarang!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://t.me/awangbot78" target="_blank" rel="noopener noreferrer" className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telegram</h3>
                  <p className="text-gray-400 text-sm">@awangbot78</p>
                </div>
              </div>
            </a>

            <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">+60 12-345 6789</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/awangbot78" target="_blank" rel="noopener noreferrer" className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-gray-500/50 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl flex items-center justify-center text-2xl">
                  🐙
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <p className="text-gray-400 text-sm">github.com/awangbot78</p>
                </div>
              </div>
            </a>

            <div className="p-6 bg-gray-800/50 border border-gray-700/50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center text-2xl">
                  🗄️
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Database</h3>
                  <p className="text-gray-400 text-sm">Supabase Connected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="mt-12 p-6 sm:p-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 text-center">📝 Form Order</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nama Anda" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="No. WhatsApp" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 focus:outline-none focus:border-purple-500 transition-colors">
                <option>Pilih Bot...</option>
                <option>Telegram - Auto Reply Bot</option>
                <option>Telegram - Broadcast Bot</option>
                <option>Telegram - Group Guard Bot</option>
                <option>Telegram - Payment Bot</option>
                <option>WhatsApp - WA Auto Reply</option>
                <option>WhatsApp - WA Bulk Sender</option>
                <option>WhatsApp - WA Shop Bot</option>
                <option>Lain-lain - Custom Bot</option>
              </select>
              <textarea 
                placeholder="Nyatakan keperluan anda..." 
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>
              <button type="button" className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
                🚀 Hantar Order
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-sm">🤖</span>
              </div>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AwangBot78</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 AwangBot78. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Product Card Component
function ProductCard({ icon, title, description, features, price, badge, gradient }: {
  icon: string
  title: string
  description: string
  features: string[]
  price: string
  badge: string
  gradient: string
}) {
  return (
    <div className="group relative p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl hover:border-purple-500/30 transition-all hover:scale-[1.02] backdrop-blur-sm">
      {badge && (
        <div className={`absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r ${gradient} rounded-full text-xs font-bold`}>
          {badge}
        </div>
      )}
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{price}</span>
        <button className={`px-4 py-2 bg-gradient-to-r ${gradient} rounded-lg text-sm font-medium hover:opacity-90 transition-opacity`}>
          Order
        </button>
      </div>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl hover:border-purple-500/30 transition-all group">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

// Pricing Card Component
function PricingCard({ title, price, period, description, features, gradient, popular }: {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  gradient: string
  popular: boolean
}) {
  return (
    <div className={`relative p-6 sm:p-8 rounded-2xl border transition-all hover:scale-[1.02] ${popular ? 'bg-gray-800/50 border-purple-500/50 shadow-lg shadow-purple-500/10' : 'bg-gray-800/30 border-gray-700/50'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-xs font-bold">
          ⭐ PALAR POPULAR
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{price}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-semibold transition-opacity hover:opacity-90 ${popular ? `bg-gradient-to-r ${gradient} shadow-lg` : 'bg-gray-700 hover:bg-gray-600'}`}>
        Pilih Pakej
      </button>
    </div>
  )
}

export default App
