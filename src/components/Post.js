export default function Post(){
   return(
       <>
        <Nav />

        <main role="main">
            <div class="postcontainer resource">
                <div class="post">
                    <div class="box box-upload">
                        <button>Upload Image</button>
                    </div>
                    <div class="info">
                        <div>
                            <label for="title">Title:</label>
                            <input type="text" name="title" class="post-input" placeholder=""/>
                        </div>
                        <div>
                            <label for="description">Description:</label>
                            <input type="text" name="description" class="post-input" placeholder=""/>
                        </div>
                        
                    </div>
                    <div class="buffer"></div>
                    <div class="actions">
                        <button>Cancel</button>
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
</main>
        <footer role="content-info">Footer</footer>
       </>
   )
}