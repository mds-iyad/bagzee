<template>
    <div class="container-illustration">
        <section class="illustration-section">
            <div class="illustration">
                <img src="../assets/images/illustrations.webp" alt="">
                <div class="explication">
                    <span>Explication</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eveniet tempora accusamus totam repudiandae aperiam dolorum, sint alias sapiente. Nemo perferendis voluptas veniam sapiente fuga. In magnam quos doloremque labore.</p>
                </div>
            </div>
        </section>

    <hr class="after-illustration">
    </div>
</template>


<style scoped>
section.illustration-section{
    display: flex;
    justify-content: center;
    height: 500px;
}

.illustration{
    max-width: 1050px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.explication{
    margin-left: 15px;
}

.explication span{
    margin-left: 10px;
    margin-bottom: 5px;
    color: rgb(112, 140, 145);
    font-size: 30px;
    font-weight: 700;
    font-family: 'PTSansNarrow', sans-serif;
}
.explication p{
    margin-top: 10px;
    margin-left: 10px;
    color: rgb(112, 140, 145);
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    font-family: 'PTSansNarrow', sans-serif;
}

.illustration img
{
    margin-top: 70px;
    height: 375px;
    width: 525px;
    border-radius: 10px;
    margin-bottom: 100px;
}
.container-illustration{
    display: grid;
    justify-content: center;
}

.after-illustration{
    max-width: 900px;
    width: 900px;
    margin-left: 75px;
    border-top: 1px solid var(--Primary-Color);
    border-radius: 10px;
    margin-top: 0px;
}

</style>