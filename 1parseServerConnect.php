<?php
@header ("Content-Type: text/html; charset=UTF-8");
include 'phpquery/phpQuery.php';

// echo $_POST['links'];
if (array_key_exists('linkMain', $_POST)) {

    $mainLink = $_POST['linkMain'];  // $mainLink = 'ezolan.a8a.com.ua/'.$_POST['linkMain']; inside
    echo $mainLink;
    function getPageByUrl ($url){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);    
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
        curl_setopt($curl, CURLOPT_ENCODING, '');
        curl_setopt ($curl, CURLOPT_CONNECTTIMEOUT, 0);
        $result = curl_exec($curl);
        $pqq = phpQuery::newDocument($result);

        $cat =  $pqq->find('#currencyWgt')->html(); // .blog-body h4
        #$img =  $pqq->find('.blog-body .blog-pos-img');
        #$info =  $pqq->find('.blog-body .post-details-opt-wr');
        
        #echo '<div class="double">';
        #echo $img;
        echo '<div class="info">';
        echo '<div class="flex__column">'.$cat.'</div>';
        #echo '<div class="content">'.$info.'</div>';
        // echo '<a href="'.$url.'" target="_blank">Перейти</a>';
        echo '</div';
        #echo '</div></div>';
        $target = curl_getinfo($curl, CURLINFO_EFFECTIVE_URL);

        curl_close($curl);
        if ($target)
            return $target;
        return false;
    }
    getPageByUrl($mainLink);
    
}
?>