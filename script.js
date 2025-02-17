// Factory Function to create blog objects
function createBlog(id, title, category, excerpt, content) {
    return { id, title, category, excerpt, content };
}

// Blog List with Full Content (Limited to 6 Blogs)
const allBlogs = [
    createBlog("1", "Solo Travel: Why You Should Try It at Least Once", "Travel", 
        "Traveling alone may seem daunting, but it’s one of the most rewarding experiences.",
        "Solo travel allows you to step out of your comfort zone, gain independence, and explore the world at your own pace. " +
        "It’s a chance to meet new people, embrace unexpected experiences, and grow personally. " +
        "From cultural immersion to self-discovery, solo travel is an experience everyone should try at least once."
    ),

    createBlog("2", "How to Start a Side Hustle in 2025", "Entrepreneurship", 
        "Want to turn your skills into extra income? Follow these step-by-step strategies to launch your side hustle.",
        "Starting a side hustle is easier than ever. Identify your skills, research the market, and find a profitable niche. " +
        "Leverage social media, freelancing platforms, and e-commerce sites to reach your audience. " +
        "Consistency and adaptability are key to growing a successful side hustle in 2025."
    ),

    createBlog("3", "10 Tips for a Healthier Work-Life Balance", "Lifestyle", 
        "Struggling to balance work and life? Learn 10 simple yet effective ways to prioritize your well-being.",
        "Work-life balance starts with setting clear boundaries. Schedule breaks, prioritize sleep, and engage in regular physical activity. " +
        "Time management techniques like the Pomodoro method can boost productivity. " +
        "Lastly, unplug from work after hours to maintain mental and emotional well-being."
    ),

    createBlog("4", "The Rise of AI in Everyday Life", "Technology", 
        "AI is no longer just a futuristic concept—it’s shaping our daily lives.",
        "Artificial Intelligence is integrated into various aspects of life, from virtual assistants like Siri and Alexa to self-driving cars. " +
        "Industries such as healthcare and finance use AI to automate processes and improve efficiency. " +
        "While AI presents many opportunities, ethical concerns like data privacy and job automation remain hot topics."
    ),

    createBlog("5", "Best Budget Travel Destinations for 2025", "Travel", 
        "Want to travel without breaking the bank? Discover top destinations for affordable adventures.",
        "Budget-friendly travel is achievable with the right destinations. Places like Vietnam, Portugal, and Mexico offer stunning experiences without a hefty price tag. " +
        "Look for affordable accommodations, use public transport, and eat at local markets to save money while exploring the world."
    ),

    createBlog("6", "The Future of Remote Work: Trends to Watch", "Business", 
        "Remote work is evolving rapidly. Explore the latest trends shaping the future of work.",
        "The remote work landscape is transforming with hybrid models, AI-powered collaboration tools, and increased digital nomad opportunities. " +
        "Companies are focusing on work-life balance, mental health, and productivity optimization. " +
        "Flexibility and technological advancements will continue shaping how businesses operate in the future."
    )
];
// console.log(allBlogs)

const rows = document.getElementById('blog-list')
showBlogs()

/*
 <div class="col">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" class="btn btn-success">Go somewhere</a>
            </div>
        </div> 
    </div> 
*/

function showBlogs(){
    rows.innerHTML = ''
    console.log(allBlogs)
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
        cardHeader.className = 'text-bg-success card-header p-3'
        cardHeader.textContent = `${allBlogs[i].category}`
        card.appendChild(cardHeader)

        //  card-body - Parent of h5, btn and p & child of card
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        card.appendChild(cardBody)

        //  h5 - child of card-body
        const h5Title = document.createElement('h5')
        h5Title.className = 'card-title text-success'
        h5Title.textContent = `${allBlogs[i].title}`
        cardBody.appendChild(h5Title)

        //  p - child of card-body
        const pExcerpt = document.createElement('p')
        pExcerpt.className = 'card-text'
        pExcerpt.textContent = `${allBlogs[i].excerpt}`
        cardBody.appendChild(pExcerpt)

        //  btn - child of card-body
        const detailBtn = document.createElement('a')
        detailBtn.className = 'btn btn-success'
        detailBtn.href = `blogdetail.html?id=${allBlogs[i].id}`
        detailBtn.textContent = 'Know More'
        cardBody.appendChild(detailBtn)
    }
}

    // Add a new blog
const addBlogBtn = document.querySelector('#add-blog-btn')

addBlogBtn.addEventListener('click', function(){
    const newId = (allBlogs.length + 1).toString();
    const title = document.querySelector('#title-input').value
    const category = document.querySelector('#category-input').value
    const excerpt = document.querySelector('#excerpt-input').value
    const content = document.querySelector('#content-input').value

    console.log()
    
    if(title && category && excerpt && content){
        allBlogs.push(
            createBlog(
                newId,
                title,
                category,
                excerpt,
                content
            )
        )
        showBlogs(); // Update the displayed list
    } else {
        alert("Please fill in all fields.");
    }

    title.value = ''
    category.value = ''
    excerpt.value = ''
    content.value = ''
})

