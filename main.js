const itemInfo = [

    {
        img: 'img/phone.png',
        price: 400,
        sale_time: '20'
    },
    {
        img: 'img/phone.png',
        price: 650,
        sale_time: '20'
    },
    {
        img: 'img/phone.png',
        price: 500,
        sale_time: '20'
    },
    {
        img: 'img/phone.png',
        price: 399,
        sale_time: '20'
    }
]

const itemsContainer = document.querySelector('.items');

function generateItems(){
    

    itemsContainer.innerHTML = itemInfo.map(item => {
        return `
            <div class="item-container">
            <div class="item">
                <div class="img-container">
                    <img src="${item.img}" alt="Phone">
                </div>
                <div class="item-description">
                    <div class="name-price">
                        <h3>Galaxy A32 5G</h3>
                        <p class="item-price">${item.price} GEL</p>
                    </div>
                    <div class="other-info">
                        <p>Recently added</p>
                        <button class="see-more">
                            See More
                        </button>
                    </div>
                    <h4 class="sale_time">Sale Ends In: ${item.sale_time} second</h4>
                </div>
            </div></div>
        `
    }).join('')

    // PopUp
    const popupBtns = document.querySelectorAll('.see-more');

    popupBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item_container = e.target.parentElement.parentElement.parentElement.parentElement;

            item_container.classList.add('active')

           item_container.addEventListener('click', (e) => {
                e.target.classList.remove('active')
            })
        })
    })

    // TimeOut
    const sale_times = document.querySelectorAll('.sale_time');
    const item_prices = document.querySelectorAll('.item-price')

    for (const sale_time  of sale_times) {
        let time = 20;

        function decreaseTime(){   
            if(time === 0) {
                clearInterval(timeInterval)
                sale_time.innerHTML = `Not For Sale`;
                item_prices.forEach(itemPrice => {
                    itemPrice.innerHTML = ``
                })
                return
            }
            time--;
            sale_time.innerHTML = `Sale Ends In: ${time} second`
        }
    
        const timeInterval = setInterval(decreaseTime, 1000)
        
    }

    

}

generateItems()



