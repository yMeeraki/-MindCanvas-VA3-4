//  Factory Function to create object
function createBlog(id, title, category, excerpt){
    return {
        id, title, category, excerpt
    }
}


const allBlogs = [
    createBlog(1, "Solo Travel: Why You Should Try It at Least Once", "Travel", "Traveling alone may seem daunting, but it’s one of the most rewarding experiences. Here’s why you should consider a solo trip."),
    createBlog(2, "How to Start a Side Hustle in 2025", "Entrepreneurship", "Want to turn your skills into extra income? Follow these step-by-step strategies to launch your own successful side hustle."),
    createBlog(3, "10 Tips for a Healthier Work-Life Balance", "Lifestyle", "Struggling to balance work and life? Learn 10 simple yet effective ways to prioritize your well-being while staying productive."),
    createBlog(4, "The Rise of AI in Everyday Life", "Technology", "AI is no longer just a futuristic concept—it’s a part of our daily lives. From smart assistants to self-driving cars, discover how AI is transforming industries and what it means for the future."),
    createBlog(5, "The Future of Remote Work: Trends to Watch", "Business", "The way we work is evolving rapidly. Explore the latest trends shaping remote work and what they mean for businesses and employees."),
    createBlog(6, "Best Budget Travel Destinations for 2025", "Travel", "Want to travel without breaking the bank? Discover top destinations that offer stunning experiences on a budget."),
    createBlog(7, "The Evolution of Smartphones: What’s Next?", "Technology", "Smartphones have come a long way since their inception. But what’s next? Foldable screens, AI-powered assistants, and new-gen batteries are just the beginning."),
    createBlog(8, "5 Mistakes New Entrepreneurs Make & How to Avoid Them", "Entrepreneurship", "Starting a business? Avoid these common mistakes that often hold new entrepreneurs back from success."),
    createBlog(9, "How to Build a Strong Personal Brand Online", "Business", "In the digital age, your personal brand is your reputation. Learn how to create a strong, authentic brand that attracts opportunities."),
    createBlog(10, "The Minimalist Lifestyle: Is Less Really More?", "Lifestyle", "Many people are embracing minimalism to reduce stress and focus on what truly matters. Could living with less bring you more happiness?")
];

console.log(allBlogs)

const rows = document.getElementById('blog-list')
showBlogs()

/*
 <div class="col">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div> 
    </div> 
*/

function showBlogs(){
    rows.innerHTML = ''
    for(let i = 0; i<allBlogs.length; i++){

        //  col - Parent of card & child of rows
        const col = document.createElement('div')
        col.className='col'
        rows.appendChild(col) 

        // card - Parent of card-body & child of col
        const card = document.createElement('div')
        card.className = 'card border-success'
        col.appendChild(card)

        //  card-header - Parent of 'Category of Blog' & child of card
        const cardHeader = document.createElement('div')
        cardHeader.className = 'card-body'
        cardHeader.textContent = `${allBlogs[i].category}`
        card.appendChild(cardHeader)

        //  card-body - Parent of h5 and p & child of card
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        card.appendChild(cardBody)

        //  h5 - child of card-body
        const h5Title = document.createElement('h5')
        h5Title.className = 'card-title'
        h5Title.textContent = `${allBlogs[i].title}`
        cardBody.appendChild(h5Title)

        //  p - child of card-body
        const pExcerpt = document.createElement('p')
        pExcerpt.className = 'card-text'
        pExcerpt.textContent = `${allBlogs[i].excerpt}`
        cardBody.appendChild(pExcerpt)
    }
}
