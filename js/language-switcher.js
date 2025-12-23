// ==================================================
// SISTEMA MULTIIDIOMA PARA CARMELINA
// Archivo: js/language-switcher.js
// ==================================================

(function($) {
    "use strict";

    // Traducciones completas del sitio
    const translations = {
        es: {
            // Header
            'header.phone': 'Teléfono',
            'header.search': 'Buscar aquí...',
            
            // Navegación
            'nav.home': 'Inicio',
            'nav.about': 'Nosotros',
            'nav.products': 'Productos',
            'nav.contact': 'Contacto',
            
            // Slider/Hero
            'hero.subtitle': 'Flores & Regalos',
            'hero.title': 'Obtén Hasta 75% de Descuento',
            'hero.description': 'Descubre nuestra colección exclusiva de flores frescas y arreglos personalizados para cada ocasión especial.',
            'hero.button': 'Contáctanos Ahora',
            
            // Banderas/Presencia Global
            'flags.title': 'Nuestras Flores Iluminan el Mundo',
            'flags.description': 'Con más de 20 años de experiencia, llevamos la belleza de nuestras flores a clientes y partners en los principales mercados internacionales',
            'flags.russia': 'Rusia',
            'flags.moscow': 'Moscú',
            'flags.europe': 'Europa',
            'flags.eu': 'Unión Europea',
            'flags.uae': 'Emiratos Árabes',
            'flags.dubai': 'Dubái • Abu Dhabi',
            'flags.usa': 'Estados Unidos',
            'flags.cities.usa': 'Miami • New York',
            'flags.korea': 'Corea del Sur',
            'flags.seoul': 'Seúl',
            
            // Productos
            'products.title': 'Flores Frescas',
            'products.tab1': 'Más Vendidos',
            'products.tab2': 'Nuevos Productos',
            'products.viewmore': 'Ver Más',
            
            // Historia
            'history.title': 'Historia de Carmelina',
            'history.subtitle': 'Un ser que nace para iluminar vidas',
            'history.origin.title': 'El Origen',
            'history.origin.text1': 'Carmelina nace en el año 2024, pero su verdadera historia empezó mucho antes. Detrás de ella hay más de 20 años de experiencia, trabajo y pasión de sus socios fundadores, quienes descubrieron que las flores no eran solo un negocio… eran su propósito de vida.',
            'history.origin.text2': 'Con los años entendieron que necesitaban crear algo más que una empresa: debía nacer un ser con alma, capaz de iluminar su propio camino y el de quienes los rodean.',
            'history.origin.text3': 'Así nació Carmelina, como símbolo de vida, esperanza y belleza en cada pétalo.',
            'history.dream.title': 'El Sueño',
            'history.dream.text1': 'Desde ese instante comenzó el sueño: formar una compañía sólida, humana y con ganas de salir adelante, para ofrecer a los clientes de toda una vida —aquellos que los han acompañado por más de dos décadas— la atención y calidad que merecen.',
            'history.dream.text2': 'Cada cliente no es solo una venta, es parte de una historia compartida, de un compromiso que se renueva con cada ramo, con cada entrega.',
            'history.growth.title': 'Evolución y Crecimiento',
            'history.growth.text1': 'Gracias al compromiso, la innovación y la excelencia en cada proceso, Carmelina ha crecido más allá de las fronteras. Hoy somos reconocidos en cuatro países principales:',
            'history.growth.text2': 'Cada envío, cada flor y cada detalle representa la esencia de Carmelina: un ser que nació para transmitir amor, cercanía y profesionalismo al mundo.',
            
            // Contacto
            'contact.title': 'Estamos Aquí Para Ti',
            'contact.subtitle': '¿Tienes alguna pregunta o necesitas ayuda? Nuestro equipo está listo para atenderte',
            'contact.form.firstname': 'Nombre',
            'contact.form.lastname': 'Apellido',
            'contact.form.email': 'Email',
            'contact.form.phone': 'Teléfono',
            'contact.form.subject': 'Asunto',
            'contact.form.subject.select': 'Selecciona un asunto',
            'contact.form.subject.order': 'Realizar un pedido',
            'contact.form.subject.general': 'Consulta general',
            'contact.form.subject.quote': 'Solicitar cotización',
            'contact.form.subject.support': 'Soporte técnico',
            'contact.form.subject.other': 'Otro',
            'contact.form.message': 'Mensaje',
            'contact.form.placeholder.message': 'Escribe tu mensaje aquí...',
            'contact.form.button': 'Enviar Mensaje',
            'contact.info.title': 'Información de Contacto',
            'contact.info.location': 'Ubicación',
            'contact.info.location.text': 'Carmen de Viboral, Antioquia<br>Colombia',
            'contact.info.phone': 'Teléfono',
            'contact.info.email': 'Email',
            'contact.info.hours': 'Horario de Atención',
            'contact.info.hours.text': 'Lunes a Viernes: 8:00 AM - 6:00 PM<br>Sábados: 9:00 AM - 2:00 PM',
            'contact.social': 'Síguenos',
            
            // Features
            'features.shipping': 'Envío Gratis',
            'features.shipping.desc': 'En todos los pedidos mayores a $49.00',
            'features.returns': '15 días de devolución',
            'features.returns.desc': 'Garantía de devolución de dinero',
            'features.checkout': 'Pago Seguro',
            'features.checkout.desc': 'Protegido por Paypal',
            'features.gift': 'Oferta & Regalo aquí',
            'features.gift.desc': 'En todos los pedidos',
            
            // Footer
            'footer.account': 'Mi Cuenta',
            'footer.quicklinks': 'Enlaces Rápidos',
            'footer.information': 'Información',
            'footer.customer': 'Servicio al Cliente',
            'footer.about': 'Sobre Nuestra Tienda',
            'footer.about.text': 'Carmelina, más de 20 años llevando belleza y alegría a través de nuestras flores a todo el mundo.',
            'footer.copyright': 'Derechos Reservados',
        },
        
        en: {
            // Header
            'header.phone': 'Phone',
            'header.search': 'Search here...',
            
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.products': 'Products',
            'nav.contact': 'Contact',
            
            // Slider/Hero
            'hero.subtitle': 'Flowers & Gifts',
            'hero.title': 'Get Up To 75% Off',
            'hero.description': 'Discover our exclusive collection of fresh flowers and personalized arrangements for every special occasion.',
            'hero.button': 'Contact Us Now',
            
            // Flags/Global Presence
            'flags.title': 'Our Flowers Illuminate the World',
            'flags.description': 'With over 20 years of experience, we bring the beauty of our flowers to clients and partners in major international markets',
            'flags.russia': 'Russia',
            'flags.moscow': 'Moscow',
            'flags.europe': 'Europe',
            'flags.eu': 'European Union',
            'flags.uae': 'United Arab Emirates',
            'flags.dubai': 'Dubai • Abu Dhabi',
            'flags.usa': 'United States',
            'flags.cities.usa': 'Miami • New York',
            'flags.korea': 'South Korea',
            'flags.seoul': 'Seoul',
            
            // Products
            'products.title': 'Fresh Flowers',
            'products.tab1': 'Best Sellers',
            'products.tab2': 'New Products',
            'products.viewmore': 'View More',
            
            // History
            'history.title': 'Carmelina\'s Story',
            'history.subtitle': 'A being born to illuminate lives',
            'history.origin.title': 'The Origin',
            'history.origin.text1': 'Carmelina was born in 2024, but its true story began much earlier. Behind it are more than 20 years of experience, work and passion from its founding partners, who discovered that flowers were not just a business... they were their life\'s purpose.',
            'history.origin.text2': 'Over the years they understood that they needed to create something more than a company: a being with soul must be born, capable of illuminating its own path and that of those around them.',
            'history.origin.text3': 'Thus Carmelina was born, as a symbol of life, hope and beauty in every petal.',
            'history.dream.title': 'The Dream',
            'history.dream.text1': 'From that moment the dream began: to form a solid, humane company eager to succeed, to offer lifetime customers—those who have accompanied them for more than two decades—the attention and quality they deserve.',
            'history.dream.text2': 'Each customer is not just a sale, but part of a shared story, a commitment renewed with each bouquet, with each delivery.',
            'history.growth.title': 'Evolution and Growth',
            'history.growth.text1': 'Thanks to commitment, innovation and excellence in every process, Carmelina has grown beyond borders. Today we are recognized in four main countries:',
            'history.growth.text2': 'Each shipment, each flower and each detail represents the essence of Carmelina: a being born to transmit love, closeness and professionalism to the world.',
            
            // Contact
            'contact.title': 'We Are Here For You',
            'contact.subtitle': 'Do you have any questions or need help? Our team is ready to assist you',
            'contact.form.firstname': 'First Name',
            'contact.form.lastname': 'Last Name',
            'contact.form.email': 'Email',
            'contact.form.phone': 'Phone',
            'contact.form.subject': 'Subject',
            'contact.form.subject.select': 'Select a subject',
            'contact.form.subject.order': 'Place an order',
            'contact.form.subject.general': 'General inquiry',
            'contact.form.subject.quote': 'Request a quote',
            'contact.form.subject.support': 'Technical support',
            'contact.form.subject.other': 'Other',
            'contact.form.message': 'Message',
            'contact.form.placeholder.message': 'Write your message here...',
            'contact.form.button': 'Send Message',
            'contact.info.title': 'Contact Information',
            'contact.info.location': 'Location',
            'contact.info.location.text': 'Carmen de Viboral, Antioquia<br>Colombia',
            'contact.info.phone': 'Phone',
            'contact.info.email': 'Email',
            'contact.info.hours': 'Business Hours',
            'contact.info.hours.text': 'Monday to Friday: 8:00 AM - 6:00 PM<br>Saturdays: 9:00 AM - 2:00 PM',
            'contact.social': 'Follow Us',
            
            // Features
            'features.shipping': 'Free Shipping',
            'features.shipping.desc': 'On all orders over $49.00',
            'features.returns': '15 Days Returns',
            'features.returns.desc': 'Moneyback guarantee',
            'features.checkout': 'Secure Checkout',
            'features.checkout.desc': 'Protected by Paypal',
            'features.gift': 'Offer & Gift Here',
            'features.gift.desc': 'On all orders',
            
            // Footer
            'footer.account': 'My Account',
            'footer.quicklinks': 'Quick Links',
            'footer.information': 'Information',
            'footer.customer': 'Customer Service',
            'footer.about': 'About Our Shop',
            'footer.about.text': 'Carmelina, over 20 years bringing beauty and joy through our flowers to the whole world.',
            'footer.copyright': 'All Rights Reserved',
        },
        
        zh: {
            // Header
            'header.phone': '电话',
            'header.search': '在这里搜索...',
            
            // Navigation
            'nav.home': '首页',
            'nav.about': '关于我们',
            'nav.products': '产品',
            'nav.contact': '联系我们',
            
            // Slider/Hero
            'hero.subtitle': '鲜花与礼品',
            'hero.title': '享受高达75%的折扣',
            'hero.description': '探索我们独家的新鲜花卉系列和为每个特殊场合定制的插花。',
            'hero.button': '立即联系我们',
            
            // Flags/Global Presence
            'flags.title': '我们的鲜花照亮世界',
            'flags.description': '凭借超过20年的经验，我们将鲜花的美丽带给主要国际市场的客户和合作伙伴',
            'flags.russia': '俄罗斯',
            'flags.moscow': '莫斯科',
            'flags.europe': '欧洲',
            'flags.eu': '欧盟',
            'flags.uae': '阿拉伯联合酋长国',
            'flags.dubai': '迪拜 • 阿布扎比',
            'flags.usa': '美国',
            'flags.cities.usa': '迈阿密 • 纽约',
            'flags.korea': '韩国',
            'flags.seoul': '首尔',
            
            // Products
            'products.title': '新鲜花卉',
            'products.tab1': '畅销产品',
            'products.tab2': '新品',
            'products.viewmore': '查看更多',
            
            // History
            'history.title': 'Carmelina的故事',
            'history.subtitle': '一个为照亮生命而诞生的存在',
            'history.origin.title': '起源',
            'history.origin.text1': 'Carmelina诞生于2024年，但其真正的故事要早得多。它背后有超过20年的经验、工作和创始合伙人的热情，他们发现鲜花不仅仅是一门生意……而是他们的人生目标。',
            'history.origin.text2': '多年来，他们明白需要创造的不仅仅是一家公司：必须诞生一个有灵魂的存在，能够照亮自己的道路和周围人的道路。',
            'history.origin.text3': '因此，Carmelina诞生了，作为每一片花瓣中生命、希望和美丽的象征。',
            'history.dream.title': '梦想',
            'history.dream.text1': '从那一刻起，梦想开始了：组建一家稳固、人性化、渴望成功的公司，为终身客户——那些陪伴他们超过二十年的人——提供他们应得的关注和质量。',
            'history.dream.text2': '每位客户不仅仅是一笔销售，而是共同故事的一部分，是每束花、每次交付中更新的承诺。',
            'history.growth.title': '演变与增长',
            'history.growth.text1': '凭借对每个流程的承诺、创新和卓越，Carmelina已经跨越国界发展。今天我们在四个主要国家获得认可：',
            'history.growth.text2': '每次发货、每朵花和每个细节都代表着Carmelina的本质：一个诞生于向世界传递爱、亲密和专业精神的存在。',
            
            // Contact
            'contact.title': '我们在这里为您服务',
            'contact.subtitle': '您有任何问题或需要帮助吗？我们的团队随时准备为您提供帮助',
            'contact.form.firstname': '名字',
            'contact.form.lastname': '姓氏',
            'contact.form.email': '电子邮件',
            'contact.form.phone': '电话',
            'contact.form.subject': '主题',
            'contact.form.subject.select': '选择一个主题',
            'contact.form.subject.order': '下订单',
            'contact.form.subject.general': '一般咨询',
            'contact.form.subject.quote': '请求报价',
            'contact.form.subject.support': '技术支持',
            'contact.form.subject.other': '其他',
            'contact.form.message': '信息',
            'contact.form.placeholder.message': '在这里写下您的信息...',
            'contact.form.button': '发送消息',
            'contact.info.title': '联系信息',
            'contact.info.location': '地点',
            'contact.info.location.text': '卡门德比博拉尔，安蒂奥基亚<br>哥伦比亚',
            'contact.info.phone': '电话',
            'contact.info.email': '电子邮件',
            'contact.info.hours': '营业时间',
            'contact.info.hours.text': '周一至周五：上午8:00 - 下午6:00<br>周六：上午9:00 - 下午2:00',
            'contact.social': '关注我们',
            
            // Features
            'features.shipping': '免费送货',
            'features.shipping.desc': '所有超过$49.00的订单',
            'features.returns': '15天退货',
            'features.returns.desc': '退款保证',
            'features.checkout': '安全结账',
            'features.checkout.desc': 'Paypal保护',
            'features.gift': '优惠和礼品',
            'features.gift.desc': '所有订单',
            
            // Footer
            'footer.account': '我的账户',
            'footer.quicklinks': '快速链接',
            'footer.information': '信息',
            'footer.customer': '客户服务',
            'footer.about': '关于我们的商店',
            'footer.about.text': 'Carmelina，20多年来通过我们的鲜花为全世界带来美丽和快乐。',
            'footer.copyright': '版权所有',
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Guardar idioma seleccionado
        localStorage.setItem('selectedLanguage', lang);
        
        // Cambiar todos los elementos con data-translate
        $('[data-translate]').each(function() {
            const key = $(this).data('translate');
            const translation = translations[lang][key];
            
            if (translation) {
                // Si el elemento es un input o textarea, cambiar el placeholder
                if ($(this).is('input') || $(this).is('textarea')) {
                    $(this).attr('placeholder', translation);
                } 
                // Si no, cambiar el contenido HTML
                else {
                    $(this).html(translation);
                }
            }
        });
        
        // Actualizar el selector de idioma
        updateLanguageSelector(lang);
        
        // Efecto visual de cambio
        $('body').addClass('language-switching');
        setTimeout(function() {
            $('body').removeClass('language-switching');
        }, 300);
    }

    // Función para actualizar el selector visual de idioma
    function updateLanguageSelector(lang) {
        const langNames = {
            'es': 'ES',
            'en': 'EN',
            'zh': '中文'
        };
        
        $('.active-currency, .language-current').text(langNames[lang]);
    }

    // Cargar idioma guardado al iniciar
    function loadSavedLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage') || 'es';
        changeLanguage(savedLang);
    }

    // Inicializar cuando el documento esté listo
    $(document).ready(function() {
        // Cargar idioma guardado
        loadSavedLanguage();
        
        // Event listeners para los botones de idioma
        $('.language-selector a, .ltn__currency-menu a').on('click', function(e) {
            e.preventDefault();
            const lang = $(this).data('lang');
            
            if (lang) {
                changeLanguage(lang);
            }
        });
    });

    // Exponer funciones globalmente si es necesario
    window.CarmelinaLanguage = {
        change: changeLanguage,
        load: loadSavedLanguage
    };

})(jQuery);