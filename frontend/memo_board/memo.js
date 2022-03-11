function openclose() {
    let status = document.getElementById('articlediv').style.display;
    if (status == 'block') {
        document.getElementById('articlediv').style.display = 'none';
        document.querySelector('#learn-more-btn').innerHTML = '포스팅박스 열기';
    } else {
        document.getElementById('articlediv').style.display = 'block';
        document.querySelector('#learn-more-btn').innerHTML = '포스팅박스 닫기';

    }
}