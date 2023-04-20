<script>
    import Carousel from 'svelte-carousel'
    import State1 from '/Mask Group 34@2x.png'
    import State2 from '/Core-70-Industrial-Sin-Fondo@2x.png'
    import State3 from '/2_55@2x.png'
    

    let stateIndex = 0;

    let stateExtras = [
        {
            img1: '',      
            img2: '',      
            img3: '',
            title: 'Cor Vision Plus',
            acristalamiento: '54',
            dimensiones: '4.00 x 4.00',
            peso: '700',
            
        },
        {
            img1: '',            
            img2: '',            
            img3: '',
            title: 'Core 70 Industrial',
            acristalamiento: '55',
            dimensiones: '1.50 x 2.60',
            peso: '160',
            
        },
        {
             img1: '',       
             img2: '',       
             img3: '',
             title: 'Cor Vision',
             acristalamiento: '30',
             dimensiones: '2.50 x 3.00',
             peso: '320',
                    
        },

    ]
</script>

<main>
<div class="main-container">
    <div class="title">
        <h1>SERIES UNICAS</h1>
        <p>Entendiendo el mercado y el tipo de proyectos que VIM busca atacar, proponemos líneas base de Cortizo y Cuprum, sin embargo tenemos la capacidad de trabajar con cualquier extrusor nacional e internacional.</p>
    </div>
    <div class="carousel">
        <Carousel
        on:pageChange={
            event => stateIndex = event.detail
          }>
            <div class="carousel-img">
                <img class="carousel-img" src={State1} alt="Test">
            </div>
            <div class="carousel-img">
                <img class="carousel-img" src={State2} alt="Test">
            </div>
            <div class="carousel-img">
                <img class="carousel-img" src={State3} alt="Test">
            </div>
          </Carousel>
    </div>
    <div class="footer">
        <div class="col-l">
            <div class="col1"></div>
            <div class="col1"></div>
            <div class="col1"></div>
        </div>
        <div class="col-r">
            <h2>{stateExtras[stateIndex].title}</h2>
            <p>Acristalamiento maximo {stateExtras[stateIndex].acristalamiento} mm.</p>
            <p>Dimensiones maximas {stateExtras[stateIndex].dimensiones} m.</p>
            <p>Peso maximo {stateExtras[stateIndex].peso} kg</p>
            <p>Ensambles a 90o</p>
            <p>Apertura manual o motorizada</p>
        </div>
    </div>
</div>
</main>

<style>

    .col1 {
        margin-right: 0.5em;
        width: 200px;
        height: 150px;
        background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgUFBQYGRgaGRgYGBgbGhoYGRgZGBoZGRgaGRobIS0kGx0qHxgYJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHzUqISozMzUzMzMxMzMzMzMzMzMzMzMzMzM1MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABOEAACAQIEAwQFBQ0GAwgDAAABAhEAAwQSITEFQVEGEyJhMnGBkaEUQlLS8AcVIyRDU1RicpOxwdEzgpKUouGDsvE1RHOjs8LT4hYXNP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACgRAAICAQQCAgAHAQAAAAAAAAABAhEDEiExUQQTQWEFFCJxgZGhMv/aAAwDAQACEQMRAD8A1Rt0hgKNtaMJXokKvgbiiKU/kpUUNYyx2Re7NA26kRQKzW1m9SIuSklKktbppkp1KxZQoYK0RFOGkxVEyLQkLR90elOI0UvOetK5NDximRshpQt1ICg7mnBZ8xQc6HjjvgiC1QNuKlskcqjv6qyk2aUFEaIojFGaQRVEScgFqItR5aLLR2FtsIUpUpS2+tPRQcuhox7IxWjy06UpBMVrC1QkJSiKLNSgKxl9AUUuKCLS2FK2MkNFaMLShQijYKCoRSgtGEoWahISjyUuKImhYaQjLRUuaOjbBSJYWhRTQJrnZZCpoppsg0oLWaSGTbCM0A1KJFJrBewZakNSgKGSsmkB2yOyUnLUs26S1unUxJY2RooCn+7oxb8qbUiehkeKXmIp44c0Xdeda0HTJAR5pu6tOhIoFKC2YW21TIpShkqWqUo26bWKoWQhboyYqS600y1k7M1XAyaKne7pBSmTQu42WoqcKUkrR2BuGiA06tsczTQWlKnnSy/ceL+hZgURNEQOtFp50EM2GTQmjCUCtG0BpiaMUIpNEUXmoi1JihFakC2HmoqKKFGgWyxpJann8qbyzXGpHW41shAalTSslGqVnJBUZCM1HpSza8jRCyaGqI+mXQjLQyHlTvd0JNbX0HR2Es86DUdAKelZAk1VBBDvSSpqQqmnUt0ddE3G+CGLRNKWzU8WqV3dD2A0EEWaHdVP7qh3Nb2C6CBkomWp5s0hrdHWjUyvKU2bdT2SkFKdTBRXstIK1ZCwDSWw4o+xG9TZX93QNqpjW6adKKnZvXXJHCCgQKcK0kpRsHAho6UkNFLK0mKZAbCL0maVFFFERthGipUUIprEYmhSoooo2ATQpUUVazFmy9DRKKfNkedBUrztaPSUHYLa9aWzjkKMLSGqdpstwgd4OlF3opOWjyU6iibmwFxQCE0tLVPLZrOSQEpS5GAlOItPC3TirQeQ2ihCW6eVKMLUHiHGcPhyq376WywJUOwWQNCRNJbbNsiwCCjCCqQdrMD+m2P3if1p232pwRMLi7LE7Krh2PkqrJJ8gKbTIDouAtZzinau3bcJaTvYMOwbKvmEMHO3wnSZmKTtV2pGRsxNu1r4N7l2BJUgHb9QGI9IwYrCYm3i8SVuo6WkgMilypiJBYhfEYO22u283hj7/ojKXR2/AY63fTPbaRsw2ZD9FhyP8dxI1p9krkXBuPPZvLavOLV+BDr/AGbgkwrZgBrB8J06EGBW5wvaIW7ly5i7q2rZW0qBgAgcd53mV4za+A5W1GoExNLKFcGUr5NA1um2t1VP2zwGn43a16NMaE6wNBp7yOtIPbLAfplr/Ef6UEpdG2LZkppkqFhO1GCu3Ft28SjuxhVBJJO8beVXBWtbXISCyU2yCprJTTW6ZG1ENrYpBSpZt0Xd090BOyEV8qQV8qnMtNsKKkCl2QylJK1KYU0y06kI4jGWiinStJK01iNCKKlFaGWmsUboUvLQrAstw5oB6Khl868y0eorAXNAUAtOKtFSSA1JiQKcRKWiU8qUHNAUWIRadApQFKApOR7aEhaUq0YFLUUUTbYhq4N90TiPfY65BlbcWV1+hOf/AFs/urt/G8cMPh7t9hpbRnjqQPCPaYHtriHAezFzEfh8Q/d2NXZ2gPcG7MubRVOpLnTXnvXThVWyc2U3BuD3sXc7u0ug1dzoiDqzfy3NanFYnC8KU27QF7FFYZzplnk0egvPIDmOkkaGo/Gu1qInyXhwCW10N0aE9Sk6z+u2vSNzmLNgDUmTMkkySec1a3Lgm9hGLuXbzG5dYsxgdAo5KoGijyFdQwOFnCYUwf8A+dNv2VrnZURy3FXmG7T4m3bS2nd5VCos21ZoEKBO5O1FKuBG7Gvui4cfLAI/JJ/zPVn2OOKeyyXSpw2XKHuDMcvNUDaMoAOraLA3AK1LPCQfx3imVQAqpZVcuaJZQ6ruTJ8A1PPSQM9x/jWIxngW29uwNFQK0sBtngRH6o0HmRNBvoKJfE+ydu5bN7h7i4mzW82ZvDoe7Y7nmVOvSZArHMpUlW0I0I6Ebj11ccKbFYRu8sK4OmZSjFWA5MvP17jkRWufCYfiqyUbDYsD5ykZ4HmB3i6biGWOg1MZtbMzimY3sxeyY3DPO1+0D6mdVPwJr0SAeledOI8LvYS4EuoUbdWHosAfSRhuNvMaTBpFrjOJO+Jv/vbn1qE46qdhi6PR+TypJt154++mI/SL/wC9ufWrqH3NeOKcIyX76h0uMAblwBmRgrAy7SdS49lTnjcVdjKSZs2t0g26QeK4f9Is/vbf1qbfi+G/SbH7239akthpCzbpDJUZ+OYUb4vDj/jW/rUy3aHB/pmG/f2/rVk5ApEtkpprdSMNfS4guW3V0Mw6MGUwSDDLodQR7DRslMpCtENkpsrUxkppkqikK7I2Whlp4pRZabULQzloU7loUbBRKy0AKcy0YSvMtnp/pErTq0pEp5LdDc1xErTk04tumOI4lLNt7twwiKzsecKJgdSdgOprJNgckc4+6vx1lyYS2xBP4S4VMEDUIkjaTLH1L1rnaY69yvXfZcuf1pfE8Y+IvPfuem7FiOk6Ko8lACjyUUwqV6GOCUaISlbJK469+fu/vLn9actYrEOwRLl5mYhVUO7FidAAJmajhKGUiCCQRBBGhBBkEGZBBgzTMSzb4bg64S2L3ErrOx9DD5i6lhBAKzFxx09FdydjTf31uYtibtplthgUSA6kD0S4zLmadd8ojQTJql4TefGYyz3zl3OcFjBlUtuwA+iJEkAROvOui8K4ai3EgDfovQ9KWPbFk6K7DYqBlXDp+33agAcxkzyT5yPVUo49hotlDMeLIAFg6+HOc0jTcRvrtUnvb0mCgBJ+am1X+Gw2ZFLRJAJMLud+Vcv5/C20r2LPxp1bMxc4hckJbsI7sYXwKoXmWPiM6A6SPXTXEuK28KAbmS7iYlLdtQirmmG1nKI0znUwcqiWq47S4SEQqSrK4YFcoIOVx6ojcc9axnBuAhbt53dnZshLOwYkkvJLHflXVCSklJcM55LS2mPYfF3bj964Yv8ANWbeRQdcqhkJAPWZPMmr1MZciSWQnXKptFV8gWtkkDzqZwiwFuCDyPTp5Cqrh/FMVcLBrhEHTS2JEAzqvnSZ88MKuRTFilkdRJYx906sSs7KptlRGmhdC3xqFjHuv6YgCMuVrcyuoYk25DbHQgDlFbFEfKDmOqqdxvAmonFLZyJJ1k7kedJi8mE5UkGeKUVbMnd4sjo1niFtTZ8IW6TJUnwguVAymT6axvqN2rHdqOyhweW7buB7FwgIxK5wWBYAgaOIE5l08hpOu7bYcfIbxn83sQfyqeVc1W6zIlsklbYbKCdAXJZoGwk1fh7E1uhKLTsUpEpeSqJgaGGWmXWpbWxTLpT2wNERhTZqQ4pllrWLR077kvF5S5hGOqfhbc/RYgOvsYqf7x6V0rIfKvPHZ3ihwuJtXxMIwzAbsjeF1jmcpMecV6C4VjreIRntklVuMkxAYpElZ3Gu9cmbaV9lYu0G6U06VOZKaZKmpmcSEUoslSzbqqx/GbNs5Mxd/wA3bGd56QNAfIkGj7DKBJy0Kzt3tPdBI7myvk+Itq4/aHI0K3sQ3qZsIpSrSstKC1yWdAarTqLSVQ04q+dazUKrmv3WeNQqYJD6UXbv7IP4NPawLf3F610TF4lbdt7lxgqIrOx6Kokn3CvPnFse2IvXL9zRrjFo+iNkXzyqFHsq+CGp2LJ0iAqU6iUpVpaiu1Ig2BVpLpT4FIdKzQEyx7Gp+PWf+J/6Vyus4JPwi6jc8x0PQVyPs/ilw+IS84ZlTPKrGY5kZBEkDdhzrZr90CwpBFq9p+x0/bpaYJcmoRNB/Xyq7w/oL6hXPD90LD/o7/6Pr0tfuk2thavActV+vXkL8NkpSla3Ox+UnFKuDX8dWVH7Q6dGqjwtvxOZ5LzHVugqnxP3Q7DgA272hnkev6/nS+FdrsNcL5mNqMkd4QoaS05SCdo19Yr1cUHGCi/g45vVJs1GATx+xuZ6eqoNxx35gfNXaOlN4ftNg1YH5TaOh+eDuOkik/f3h4Obv0mAJzj69cPn+LkzadNbdnT4mWONtyNMlxQolh6K/wABUfiEFFI11PM+fSqhu0+BP5dNgN+g/bor3anBsAoxFsR5keXU1PxPHzQytzSr4p7hzZIyjSuyu7bJ+IX/AFJzJ/KJ1rktkV1HtVxnDXcHdt27yO7BcqjMSYuKTuI2B91c0RCN69M5o8D6rS8tBEpcVSJmNEUVnCvccW7aF3YwqqJJP219U8qt+C8BvYt8ltfCPTuHREHUnr0A1+JGsxOLw/CkazhlF3FEQ7t8wkj+0I9EbEIpk6ZiNzpTrb5BVkPAdnbHD7Yv4yLl4zktKA4UjfKpIDsObGFEjnqa/jfZC1ft/KuHEEGS1naDuQgOqMPoGPKNAdRwPBXMRhkvXGZ7rl87wdQtxwqjKIAA0AGgqk7Xd9grti5hjlYpcNxSCEuC3kIDgxMS2uhEmCKm5NbmpcGB4bYm4RcQ6SksICOCvpgxrCsI3kjSYrtP3OuMC/Ye0TL2XKHzRiWRvVOdf7lZjF3rGNti46tYxSSxTk5QKCGZdHXVYbQjQHSq3sjxL5HjbMsQl/NbcEgqC2TIRpqQ8AnkDXHPJryV9bDR2OzFabKVIiiIpLLaTK8e4PiLrEpczoR/ZNcaygOs5jbtl7i7aEjnrXPON4HHo7WGe3aUIrhMMGRGDXAgDNGdpn5x/wB+1Za5t2+QfLVkT+CQx/euVrHhG3RkrPZbDka4pBqwggHYkTM6zv7aFTmc9APLpQp9TK+tHZAKYvYtVEqC5kCFGmoLAltgsDemcfi1tpIALEgKIJmWVToNdM0+oE8jXO+03F1trZEMgV08GRgAuRZCrKzlZCRM+ohstc7TNSOnWMWjQCVBMwMwMwzLoefon1bVM0rlHBOKBXvJbvBFR3+TJcRs2dybrzAOmUMAvmY1mepWHzKDEEjbp6/OgruhWjBfdU4yEtphEbxXIe5G4tqfCD+04/0Ec65Tmrq3aXsd3tzEYy8zMFDsFW5kOS2vhVVNtgDC/S1JJ0msngOC4e6udcNiokrretDUetK9HFKMY0c87bM2h+004hrYW+zNj9HxP76z9WpKdm8P+jYj99a/pVlkiT0sxa/bWida3Q7PYf8ARr/761/SnLHBcPbYOMJcYifC9y06GQR4lOh3/hWeSINLMFk8jSCldIxNmcht4TDJK+IXLFtjOZxuukQqn204nCrpVWyYBZmJwy8jB1za0Paug6DmPd+ukmzXTzwm914f/lk+tRfe2/8ATwH+WT61DWujUcvNmkm3XUfvbiPzmA/y1v61H97MR+cwH+WT69bWujUcu7qlqldO+92J/O4D/LJ9egOH4r89gf8ALJ9ej7F0ajmap9tKUErpgwGJ/P4H/LL9enF4fi9YvYMwCdMMNhv+U+ND2fQdP2czVKYxA8e/IH+P9K6WUxuUmcNMaDuRvyB8W1NvgMS5BurgywEeK0hIG/zmJrny+ZjxtKWxWGGUt0c+XlWr7N9kXvgXbxNuwBmkwC4GsrOgWN2Onr1i2tYC4HAK4ODIhLNkPqpAKliQSCQYjWI86kXu+xN61auYi33a5syZHtu7Ih8TDMUcAlTAaBvFLD8QxZHpg9zT8eUVbRZXL9oW+4sMbFoQO8Qqp1iWVmMiebnxcxG9Vtvstgl3uOAT6bPbCk7zm8z/ABqN2l4qMBcS2LIuZreeQ2SPEyxGUz6O/nUnDcYZwCcOQIB9IsBOvJKbJnx495OhIYpz/wCUKbs1g48Vy4i/SZ0VR6zy6VGv9ncGim5mveEZvStjbWre3ce4PDbBjkTl/wCYVV8Qxt1QVa0Ar5k0uA5SNGY+GdARI6e2oy87FKL0u/4DLx5x5RlsfhrRuOT3qKVYowK5y6qDBIIGubMdvRAid69cUEtnDslvIYbNcBV0bNAZCzAA5QTIGxM9KkY7GFfSnUAwNAGQFCIBAIIBJ06RzNMJYW5nfuzlVCXM5gAwKgPB0aVgRyMxzbixSd7CNHY+E8WXKlu46kwqrdBGS4YABJ+ax9xkRvlFywrG9mOzVtbEd5fZCUyq+RUykqXyZSXysCwOY/OJAEzVjxDtL3Za3bw7kpCk3GW2i6AjVzJ0IPLeuyTXKKwv5NBWE7ZYWcYjEHL3SLMEic9zeNt6ruKdor9yQ+Ow1hQJZbd1JgmASyLccexhvWK4lDs+XEC8jA+Il2J0hoL6k7eLQUYRTGc9O5fG0nzriAwJDOoI05gnShWO7no8DkMu3woVbQL+YZ3XirG2jXGKZER3bMJIKqSG1IkbCNN964l2p4guJuNfAZGkAodCrCAzmPRYwBG8rrutbDiXEbVy21y5axLW00K3MVddGJORMyFifSI1EVjL92wbb/gzmZyyj0Qik6gGSTyGpO3LSWliaDHImh7sxcd8Q2Uqbro6q1wAgu4OZtSFDCSZYx6XziK7jb4vh7YS3cvpm0trLglyoAkxtJ5mvPGDw+dvTVCNSxnmQdAN/hWiZyiIpuggpbBQg5TBLFjB5zHsrnlF3aRnNfB2zjdxFw91GdQzo6qCwBZmBAAB3PlWCxWFA4Xd/bLeYMKJ0rM8BwyviLbviAzhkkFSWchY9LNpoBy6Vt+KJHDL3rH8UFdkYJRojKVs5fawd0mRfcCW0l9iIA9LlvU/C4W4pJa87AgaZm0Ok8/tNO4YVMWmWNCuTog3MLdJJF5wNIGZ9I350i1grqkM2IdgM0rL6zMfO5VaCk3DofUab1oGtnV8Hg1dAC2WFUT6xEg8jVP24wgGERQ8+MQ3nrrp66vcM2VNJ1VNss6A/S0ql7cP+KpvPeCZidc0TGnKuWKl7PortpMBg+FsxJ7zppqeUHnvTa8HdLbo10s7FirwfBIAAGvL186ueFvE+zpT+JaeXPy8qrK9QUlpMn957kicQSJQkZTrkWHG/wA461OTA+DKSJiMwB10AkyTr6oq0I+2lFFMoISyptcMIBDPJIABiIIC66cpDGP1o1peG4Me7ZGuFmYtDgQyz6Mb7faKtVFSrBpXFLgZOzODs+6am+W/s91aBkXK2mbXNvrt51sfudcO7vvka4WJVSXiDEvpqTtNQcc2g/2q47DP478/QSNY1OfbzpHF6W1yFtXRd8WwqpYuMj5mVLjjYwYJE+QNY7AXcW9pLnyi0udM4Hya43MCM2cA7jWtdxBALF/wsCbTiSwb5p6Vw5OKXRAF24AJAUXHAA10AB0GgrlXivKnqq1xe40vI9VV8nT+B8RuXsPh7twrmuO6NlWBozAQCTGi1Y4XDAYu0f1L3xQVW9i7QbBYbOoJDuy7GJdyCOhg1e4UTftH9R/itefHCoeUq43Ov2OWF30UfbbAd5iE0+YR/wCZcP8AOpjWRbCCYHdoSNPon+lWHGrc3FP6pH+tv61je03bFLbm1bWXRFRs5yJ6GYlSDJ0YDlr7Jr+J+PLLDTHm0DxcijTfRsMJ6JK66/yqi4rauMHS46AwXWMySo0IAzZZ1g+QB51neD9v9Ql5AJygFSeeaCdDMCAfb5CtnicMLyXE8Ofu3Kzscp5aHrBjr6o8aGHLgmoSXPBbI4zi5Iw9y13c3MseHI0aEaA6TBkECfWak8FDd33aqiqCt4sFId3XRFDgifETooMCdROjuKdiCzKwysykmXJJOgOmpiNtpnmJVhbd97Rt2kztbzOMhtgW2dW8TkuSrEgAAldFOhr1cDds82ZusP2ksG4ltVCd4jXXlckGVIJJgNIDEnXbeot3tXgncHK4DFlF4DKGCQMyurSyTImdIrH8LOGVVu37j3bzj0CA+gMPLtKka5tYJirgYuwpRReHhYMCuHCiPnD0zE6yRyNdkJSlFfvv+w6/cyPC7StxDElvHkuW7oByywNxXuiT9KSpPRjvUXjFuXb5odncAt1YkKG2B8Q8v4VN4TlHEMaeiCABy8EwB00qRxjEK6W3kQiSgLZQTOYONNG8VdWNbi5P+TGm2x9FoHIBWIHq8QoVZd0G1Pd9N+mn0PKhXTpOPWzWfe1rmCuJbVS7OQoJyyReB3Go0BqjvdmcRlUG2m6/lH9J8g+LK3qirfBdoilq2wW2veQ6hrgJGdmMNEEAZW8RAGlKxeIxVy2W+UK4Jt+GyVD+muUq4AA1Mct6jkyNvY7YY/07lTb7J38rHu7c5gB+FuAeHMr7b6gU9iOzt3MkpahURW/CPyjNHXnVTxTjVzDu63FvAvLIrXJVQ2bxZQxEknY+vfWtdgePXFsW4ZF8JOV2OeMxyhzqQcu5iZqLnN7qv6G0R4sqeD8MuDEW2ITwEAjPczALIMK24nma1/GzHDL3rT4vbFVeE7R5oR01Jd2yhnC6sZAyBiAOYFL4rxS1c4fdt22YvKHKUuKWHeJ6OZRmiCTExFXxSbTvsjkjUlRjsOalKfOq205HzW9zU6t3yPuNdCaJuywB86buNofUaifKY6/GkPiQevxo2hNzd9quK3bV5Et3XRWRPRCQDJGrMNNY/wAVQXx927hX7y4Xy3rYU+EjXvpgrv6IHsqu7ZcYU4hGtMXXIEcAXBqjvOUxpoR4l301imsJjFbB3dde9smNZiLw3IBaPbE1FVqLO9JNwR+0VMfX/pVJh7w86kG566pJKwRbonlftFAL9oqvN4dfjQXEDr8ayFZZKv2inUU/YVWi56/jSlvDr8aDSGVk7EzH+1Hhb727GIe2zK02dVmYLODAG+/wquuYkdfjT+HuWzh8SHbKD3InU7s40ABOk8qWVKIVeoipxvEMHD33jK4AZgMwCnNKOQTprAnesAr/AG99aLA3lzFBmlpQBFYHUMFMkZY1jXWJpVrsvb/SWkbju7YI99+pxyxjyHJhlkqvg3HYG8WwNsydDcG/JXYD4AVJ7RXXVGNt2RwhyspYGZ2lNf5ddKg9m4w2HW0qvcCs5zgWwDmYsRAdtp60vimJNxXHdMAUI8WSNyTPiOkeyuO4vJa7OxJrHTXwTsNdZ7t8O7MA6ASWYAG2pIAJgaydOtZ/tD2RuX7jXVvLMaI6HQBMv9oGzHVV32kkVNw3GLZuXGElWZMvo7BQCTmIjWdNeuk05xbjtu3aczkbISnitAkkeEgZ559K6paeyEboqOG/c8tJke5ddmEFgFVVJ3InUxy0I0rbODkyaBYiFDjSCI9LbU1T4LtBZuIrrEET6dnTyMuCPaAaO9x6ysTEEwDnsEE+x9PXS/o4dBd9Eq5w9CRpA0BWCVcDYOp9LcnXWTWV4y5FxrC3LwyZVCKTkmMwhZiRr76vX41aGoAnpntf+1yfcDWV4pi1uYi+VYBkuOsErBKPCkTsYU/bWhULSSEafybHszhWsd6ptyCG8Q28JIjxGTEnly51qXueQ91cYs9sblssO7YMcynxudTv4XJFTf8A9i3T+TXnz29uWuVqUdqNJpvYkcEYffPHLO6HbfR7YMe+mOJYTuyeisSR1QzDRsWG3Lb1GqrB9p0S82ISwgd8wds12WDRM5nKg5lUyFG21TsT2otXiA1jISwEpeVyRqIhkEakc+Z0rqhq5C6ktzO96ByI/vT8aFJxFoZj4wdTtloVW2Q0CuJXRcw+HtogD21Ifxqc8nQhZAA5Tv7hVhhO01xLK2u8yQQSVymCDKxvABA/nW4HA8Q0d/8ALX2lbSpaU+csXb3EVoMDeeyiouDxZUTBco7aknVmljz5+6pwT5a/0qpM5ph8JiOKFYtPfj57M4RZMelIURroPdtW74N9zx2g4q6+3oozRy0Llsx/wrVzhuIMR48DcnkfT+LRHsqecWcumFvjoAigfxpn9GscHBbOFw10WbYEo0xMtoRqRqfWTPnXPce6/InyjQsJIIJ0dJjrtW3XiF0g58NdC665FJ+I0qtxONBBGQqetxcy+0BhPvp8aaTTEZy9LtsD50+up2HxFkDxKxPXMAB7K2dm8NS9yy3QLbVAPX4yT8KLEXCR+D7kN5oQI56rcqv8AtmOsXEZgoDNPTL9o86lpi7due78TASWADZepWdDHX3da0gvZE/B2rGc6EuxZN+kTFFg8ZfGv4sOqrbIX3hgTQktuBot9ld2js23xIUnIRbVmJygbtGrESYjSkPZtJh37t58Vs/NEHxxs56npt7tDxC5ibjKbViyVAEm5ZLtMn0SDtQy3BbIuW0JJB0slEkTvLmd9/hXNvquv9LX+mjHWEYjQ6z6xHrp17L/ADiaurqSZ7izP6pdPgop1ScuXurfqL3GE9dRV7+iX8me7vkZPtP9aVcw/KB130qzQXZP4OyI5nvIPq8Rp12uHfuB6kP86ZCtlULLqAdCPMzr6ppolt8o9h0q7tpzZkOhgZNJgxr645Ulrbn83/g/pW/gNvspXvMCBkWeQk6/GrbhaZ7V5SgUjJmghtiY0ZxG3lT9oXIg27RP/hhvfK/zq0wLuqMDbTMcsRhmyaEzmynXfTpUcnHBSHPJQcO4Hce4WRFbIZLd5AYkeiojXcjp51BxrG27IbaKQSuog6aTvHL1VrMRfv693atgjmbN1QdOULp7zVbewneL3l3C22ubMMjQ+wB7x0LCIj1HlXDPHOSuik2mtmZv5S5EBiF/VOn8ajG5vmKty1cHUeo71pbuCQ6DhtgjnLiYjlFjeajfe4mY4fhx0l0011kfJqX8vLpkN+zL3MBYJkogPk0e3fU0/ZwGGMg25n6LDl5kT8eVaJOGH52DseUXE6dBhusUf3nmPxKxsc3jXfWIPyfUe6mWLIuzW+yjThWBOptv+8Bj3gx7etODhnDzy9neCfPUD+VW44WwP/Z+Gid+8G3nFg60eM4YxRlTB2E5Ai7lPrMWN/VW0ZPs1vsgYTg/DQ6EM6kOpAJtkSCI5VAXhuDeLjshdwGcuUkuwDPz1Mk+dPrwC8DPd2xsfBeIMjbVrJFO4fgLrAGHcwIH4wNNumGkmmeLJXyDdoirw3BiQDa9QZZ8+cilNwzCGMxUg7eOPYDV5bwN4ABcDZPm9x3J9vcU+OHXd/kdoTMxOnq/Ba+2kePL9i6X2ZZuD4PcMnMiXJ/5mon4Jh48LoCYMB1Px1j7a1rTwy4f+5W9jBhpzdNbW2+vwqG2AxCGVwVkHzc/x7gUVDN8WbS18mX/APxhP0kfA/HnR1pPk+L/AESx/jP/AMNCjpz9G37Or5Wj0j8P6U0bh5n7e6hQrpKCkvx/0FOjEnz+H8qFCtRhq7jBEHnpVHjsFafRrYINChVI7AK89nsOde6GvqFIbs3h+dke/wDoaFCqpsUIdnsIPyKe7WnLXA8OrStlJ6xP8aFCtLgMeS+w4AEZfdFQeMYa26EMpjfUn+RoUK41COs6k3RmbfDrM+EEfbzFTvkCgbmhQqrW4l7FdjOGgAmSR5mqR1tajIGMc5oUK6ccURmwWbKExkA9pq1wuCt/QFChTzSFi2WFvBoNra+4VcYEsuyj2AfxJoUKhkgqKQmyddxDxqnxH8jUF2M7H3/70KFTx4ohnOQ21NmwpMxRUK6owijnlOQr5Jz+GkUNBt/ChQo0jJsJr3Kfh/vUTEbSaFCkcUh7dFcly2T5+Yq2wgca2ioPms/0oUKIr5LBsdjlGjWiPNP/ALU2OJ4/f8FAidI92v8AKhQraIhJVjH3yJa0uvzldZ9xQUu5i53B/wBP8qFClpAGO+XoaKhQpgH/2Q==');
    }
    .main-container {
        z-index: 1;
        position: relative;
        height: 100vh;
        background-color: #E6E6E6;
        padding: 121px 167px;
        font-family: Termina-Light;;
    }
    h1 {
        margin-top: unset;
    }

    .carousel {
        
    }

    .carousel-img {
        width: 485px;
        display: flex;
        justify-content: center;
    }

    .col-r{
        width: 335px;
        margin-left: 1em;
    }

    .col-r p {
        margin: 0.5em 0;
        font-size: 14px;
    }
    .col-r h2 {
        margin: unset;
        margin-bottom: 0.5em;
    }
    .col-l{
        display: flex;
    }

    .footer{
        display: flex;
        justify-content: center;
    }
</style>