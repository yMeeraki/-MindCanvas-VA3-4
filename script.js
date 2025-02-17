// Factory Function to create blog objects
function createBlog(id, title, category, excerpt, content) {
    return { id, title, category, excerpt, content };
}

// Blog List with Full Content (Limited to 6 Blogs)
const allBlogs = [
    createBlog("1", "Solo Travel: Why You Should Try It at Least Once", "Travel", 
        "Traveling alone may seem daunting, but it’s one of the most rewarding experiences.",
        "Solo travel allows you to step out of your comfort zone, gain independence, and explore the world at your own pace.\n" +
        "It’s a chance to meet new people, embrace unexpected experiences, and grow personally.\n" +
        "From cultural immersion to self-discovery, solo travel is an experience everyone should try at least once.\n" +
        "Imagine waking up in a new city, with the freedom to plan your day however you choose. Whether it's exploring ancient ruins, hiking through breathtaking landscapes, or simply sitting at a café and people-watching, solo travel lets you experience the world in a way that group travel can't offer. It's about the journey, the moments of peace, and the connections made along the way."
    ),

    createBlog("2", "How to Start a Side Hustle in 2025", "Entrepreneurship", 
        "Want to turn your skills into extra income? Follow these step-by-step strategies to launch your side hustle.",
        "Starting a side hustle is easier than ever. Identify your skills, research the market, and find a profitable niche.\n" +
        "Leverage social media, freelancing platforms, and e-commerce sites to reach your audience.\n" +
        "Consistency and adaptability are key to growing a successful side hustle in 2025.\n" +
        "With the rise of remote work and digital platforms, there has never been a better time to start a side hustle. Whether it's freelance writing, graphic design, or selling handmade goods, the opportunities are endless. But, be prepared for challenges too. Time management is essential, and balancing your side hustle with your full-time job can be tricky. Start small, build a loyal customer base, and scale as you gain confidence and experience. Remember, persistence is key."
    ),

    createBlog("3", "10 Tips for a Healthier Work-Life Balance", "Lifestyle", 
        "Struggling to balance work and life? Learn 10 simple yet effective ways to prioritize your well-being.",
        "Work-life balance starts with setting clear boundaries.\n" +
        "Schedule breaks, prioritize sleep, and engage in regular physical activity.\n" +
        "Time management techniques like the Pomodoro method can boost productivity.\n" +
        "Lastly, unplug from work after hours to maintain mental and emotional well-being.\n" +
        "Maintaining work-life balance is essential for overall well-being. But it’s not just about having time off. It’s about making the most of that time, and setting boundaries that allow you to switch off from work. Try to designate specific hours for work and non-work activities. Make sure to set aside time for hobbies, family, and self-care. Taking time for yourself helps reduce stress and boosts your productivity when you return to work."
    ),

    createBlog("4", "The Rise of AI in Everyday Life", "Technology", 
        "AI is no longer just a futuristic concept—it’s shaping our daily lives.",
        "Artificial Intelligence is integrated into various aspects of life, from virtual assistants like Siri and Alexa to self-driving cars.\n" +
        "Industries such as healthcare and finance use AI to automate processes and improve efficiency.\n" +
        "While AI presents many opportunities, ethical concerns like data privacy and job automation remain hot topics.\n" +
        "AI’s reach extends far beyond personal assistants. It's revolutionizing healthcare by helping doctors diagnose diseases more accurately, predicting financial trends, and even assisting in drug discovery. In everyday life, it powers recommendation systems, helps automate household tasks, and improves online shopping experiences. But, as with all new technologies, it brings challenges, including ethical dilemmas regarding privacy, bias, and the displacement of jobs."
    ),

    createBlog("5", "Best Budget Travel Destinations for 2025", "Travel", 
        "Want to travel without breaking the bank? Discover top destinations for affordable adventures.",
        "Budget-friendly travel is achievable with the right destinations. Places like Vietnam, Portugal, and Mexico offer stunning experiences without a hefty price tag.\n" +
        "Look for affordable accommodations, use public transport, and eat at local markets to save money while exploring the world.\n" +
        "In 2025, budget travel doesn’t mean sacrificing experiences. For example, you can explore the rich cultural history of Vietnam, relax on the beautiful beaches of Portugal, or hike the scenic trails in Mexico—all for a fraction of the price of more popular destinations. Choosing local eateries, using public transport, and staying in hostels or Airbnb can make your trip both affordable and enriching."
    ),

    createBlog("6", "The Future of Remote Work: Trends to Watch", "Business", 
        "Remote work is evolving rapidly. Explore the latest trends shaping the future of work.",
        "The remote work landscape is transforming with hybrid models, AI-powered collaboration tools, and increased digital nomad opportunities.\n" +
        "Companies are focusing on work-life balance, mental health, and productivity optimization.\n" +
        "Flexibility and technological advancements will continue shaping how businesses operate in the future.\n" +
        "The future of remote work looks promising as hybrid work models gain popularity. Many companies are allowing employees to choose when and where they work, leading to a better work-life balance. With the help of AI-powered tools like Slack, Zoom, and project management software, remote teams can collaborate efficiently from different corners of the world. But it’s not just about technology—companies are also focusing more on mental health and providing resources to support employee well-being, helping to create a healthier, more balanced work environment."
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

