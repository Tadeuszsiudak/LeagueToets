


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>fermata/fermata.js at master · natevw/fermata</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe114-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="911CCF72:56EE:41C2D33:52494660" name="octolytics-dimension-request_id" /><meta content="3510277" name="octolytics-actor-id" /><meta content="MilanXS" name="octolytics-actor-login" /><meta content="34f38a9c0f8b78db8bae4d7355cf39e81077726889a1e81224894a46decd2762" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="jrpGaoVx+5vfrPUYTTlcLe+jZWC1Avqj8LLAgcryehY=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-ae794206d0e4e8a84619ca476b2b906ec038d487.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-61cd86e2b320f98354524f6a926105d8cd397d38.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-4e5aeedcc7a86dcff8294cb84644a333b46202a2.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-0c6e6b57b385c52ea52784f1accc11d4e71e1c62.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="e2ea29d653cc85291b32697b527de68d">

        <link data-pjax-transient rel='permalink' href='/natevw/fermata/blob/0449170fe496664b59a94f2ebd166fd109b57f34/fermata.js'>
  <meta property="og:title" content="fermata"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/natevw/fermata"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="fermata - Succinct native REST client, for client-side web apps and node.js. Turns URLs into magic JavaScript objects."/>

  <meta name="description" content="fermata - Succinct native REST client, for client-side web apps and node.js. Turns URLs into magic JavaScript objects." />

  <meta content="265902" name="octolytics-dimension-user_id" /><meta content="natevw" name="octolytics-dimension-user_login" /><meta content="1551766" name="octolytics-dimension-repository_id" /><meta content="natevw/fermata" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1551766" name="octolytics-dimension-repository_network_root_id" /><meta content="natevw/fermata" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/natevw/fermata/commits/master.atom" rel="alternate" title="Recent Commits to fermata:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="MilanXS"
      data-repo="natevw/fermata"
      data-branch="master"
      data-sha="600da1d313e8dfd8a06eefc0206f73c7bda2b134"
  >

    <input type="hidden" name="nwo" value="natevw/fermata" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/MilanXS" class="name">
        <img height="20" src="https://0.gravatar.com/avatar/94aebde78feabc85d7a006d815a0179f?d=https%3A%2F%2Fidenticons.github.com%2F80f25ba8973c8ed7068782122e2038c0.png&amp;s=140" width="20" /> MilanXS
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="natevw/fermata">This repository</span>
    </li>
    <li>
      <a href="/natevw/fermata/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      

<div class="flash-global flash-error">
<div class="container">








    <h2>One of our mostly harmless robots seems to think you are not a human.</h2>
    <p>
      Because of that, it's hidden your profile from the public. If you really are human, please <a href="/support">contact support</a> to have your profile reinstated.
    </p>
    <p>We promise we won't require DNA proof of your humanity.</p>






</div>
</div>



          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="jrpGaoVx+5vfrPUYTTlcLe+jZWC1Avqj8LLAgcryehY=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1551766" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/natevw/fermata/watchers">
          5
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/natevw/fermata/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/natevw/fermata/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/natevw/fermata/stargazers">201</a>
</div>

  </li>


        <li>
          <a href="/natevw/fermata/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/natevw/fermata/network" class="social-count">15</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/natevw" class="url fn" itemprop="url" rel="author"><span itemprop="title">natevw</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/natevw/fermata" class="js-current-repository js-repo-home-link">fermata</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/natevw/fermata" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /natevw/fermata">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/natevw/fermata/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /natevw/fermata/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>17</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/natevw/fermata/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /natevw/fermata/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/natevw/fermata/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /natevw/fermata/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/natevw/fermata/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /natevw/fermata/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/natevw/fermata/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /natevw/fermata/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/natevw/fermata/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /natevw/fermata/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/natevw/fermata.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/natevw/fermata.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:natevw/fermata.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:natevw/fermata.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/natevw/fermata" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/natevw/fermata" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="github-mac://openRepo/https://github.com/natevw/fermata" data-url="github-mac://openRepo/https://github.com/natevw/fermata" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/natevw/fermata/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:41b31a14bb7a1b2f8b2f87e5b93b4850 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/natevw/fermata/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/natevw/fermata/blob/master/fermata.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/natevw/fermata/blob/plugins/fermata.js"
                 data-name="plugins"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="plugins">plugins</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/natevw/fermata" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">fermata</span></a></span></span><span class="separator"> / </span><strong class="final-path">fermata.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="fermata.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/d4df3d19d4f89cc9a151275748b1877b?d=https%3A%2F%2Fidenticons.github.com%2Fef4bbe2b111d01d0c5d92fdf042b8561.png&amp;s=140" width="24" />
      <span class="author"><a href="/natevw" rel="author">natevw</a></span>
      <time class="js-relative-date" datetime="2013-08-19T19:39:55-07:00" title="2013-08-19 19:39:55">August 19, 2013</time>
      <div class="commit-title">
          <a href="/natevw/fermata/commit/454feff45a5649d4e8d3bc88281789e9458f2127" class="message" data-pjax="true" title="don&#39;t bark at zero-length data (HACK: this also allows textResponse=fals...

...e override by passing a Buffer(0) to a GET request)">don't bark at zero-length data (HACK: this also allows textResponse=f…</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
        
      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/d4df3d19d4f89cc9a151275748b1877b?d=https%3A%2F%2Fidenticons.github.com%2Fef4bbe2b111d01d0c5d92fdf042b8561.png&amp;s=140" width="24" />
            <a href="/natevw">natevw</a>
          </li>
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>421 lines (382 sloc)</span>
        <span>16.941 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/natevw/fermata/edit/master/fermata.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/natevw/fermata/raw/master/fermata.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/natevw/fermata/blame/master/fermata.js" class="button minibutton ">Blame</a>
          <a href="/natevw/fermata/commits/master/fermata.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/natevw/fermata/delete/master/fermata.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">Fermata: a succinct REST client.</span></div><div class='line' id='LC3'><span class="cm">Written by Nathan Vander Wilt (nate@calftrail.com).</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">Copyright © 2011 &amp;yet, LLC. Released under the terms of the MIT License:</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="cm">Permission is hereby granted, free of charge, to any person obtaining a copy</span></div><div class='line' id='LC8'><span class="cm">of this software and associated documentation files (the &quot;Software&quot;), to deal</span></div><div class='line' id='LC9'><span class="cm">in the Software without restriction, including without limitation the rights</span></div><div class='line' id='LC10'><span class="cm">to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></div><div class='line' id='LC11'><span class="cm">copies of the Software, and to permit persons to whom the Software is</span></div><div class='line' id='LC12'><span class="cm">furnished to do so, subject to the following conditions:</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">The above copyright notice and this permission notice shall be included in</span></div><div class='line' id='LC15'><span class="cm">all copies or substantial portions of the Software.</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="cm">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></div><div class='line' id='LC18'><span class="cm">IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></div><div class='line' id='LC19'><span class="cm">FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></div><div class='line' id='LC20'><span class="cm">AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></div><div class='line' id='LC21'><span class="cm">LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></div><div class='line' id='LC22'><span class="cm">OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN</span></div><div class='line' id='LC23'><span class="cm">THE SOFTWARE.</span></div><div class='line' id='LC24'><span class="cm">*/</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><span class="kd">var</span> <span class="nx">Proxy</span><span class="p">;</span>  <span class="c1">// FEEEEL THE POWAH! FEEEEEEEEEEL IT!!!!</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="kd">var</span> <span class="nx">fermata</span> <span class="o">=</span> <span class="p">{</span><span class="nx">plugins</span><span class="o">:</span><span class="p">{}};</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">plugin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">;</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">baseURL</span> <span class="o">=</span> <span class="p">{</span><span class="nx">base</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">path</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;&quot;</span><span class="p">],</span> <span class="nx">query</span><span class="o">:</span><span class="p">{}},</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">concat</span><span class="p">([].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)),</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transport</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_makeTransport</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">baseURL</span><span class="p">,</span> <span class="s2">&quot;_base&quot;</span><span class="p">).</span><span class="nx">using</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_makeNativeURL</span><span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="nx">baseURL</span><span class="p">);</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fermata</span><span class="p">.</span><span class="nx">_useExports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC41'><span class="p">};</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_makeTransport</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">baseURL</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">transport</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">baseURL</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transport</span><span class="p">.</span><span class="nx">using</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">plugin</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">transport</span><span class="p">;</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_makeTransport</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">baseURL</span><span class="p">,</span> <span class="nx">plugin</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">;</span></div><div class='line' id='LC51'><span class="p">};</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_makeNativeURL</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_wrapTheWrapper</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">),</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastArg</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_typeof2</span><span class="p">(</span><span class="nx">args</span><span class="p">[</span><span class="nx">args</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">lastArg</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_stringForURL</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">lastArg</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">args</span><span class="p">.</span><span class="nx">pop</span><span class="p">(),</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">args</span><span class="p">.</span><span class="nx">pop</span><span class="p">(),</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_normalize</span><span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">pop</span><span class="p">()</span> <span class="o">||</span> <span class="p">{}),</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">pop</span><span class="p">().</span><span class="nx">toUpperCase</span><span class="p">();</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;DEL&#39;</span><span class="p">)</span> <span class="nx">method</span> <span class="o">=</span> <span class="s1">&#39;DELETE&#39;</span><span class="p">;</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">({</span><span class="nx">base</span><span class="o">:</span><span class="nx">url</span><span class="p">.</span><span class="nx">base</span><span class="p">,</span> <span class="nx">method</span><span class="o">:</span><span class="nx">method</span><span class="p">,</span> <span class="nx">path</span><span class="o">:</span><span class="nx">url</span><span class="p">.</span><span class="nx">path</span><span class="p">,</span> <span class="nx">query</span><span class="o">:</span><span class="nx">url</span><span class="p">.</span><span class="nx">query</span><span class="p">,</span> <span class="nx">headers</span><span class="o">:</span><span class="nx">headers</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span><span class="nx">data</span><span class="p">},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">query2</span> <span class="o">=</span> <span class="p">(</span><span class="nx">lastArg</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_extend</span><span class="p">(</span><span class="nx">fermata</span><span class="p">.</span><span class="nx">_extend</span><span class="p">({},</span> <span class="nx">url</span><span class="p">.</span><span class="nx">query</span><span class="p">),</span> <span class="nx">args</span><span class="p">.</span><span class="nx">pop</span><span class="p">())</span> <span class="o">:</span> <span class="nx">url</span><span class="p">.</span><span class="nx">query</span><span class="p">,</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">path2</span> <span class="o">=</span> <span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">?</span> <span class="nx">url</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">args</span><span class="p">)</span> <span class="o">:</span> <span class="nx">url</span><span class="p">.</span><span class="nx">path</span><span class="p">;</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_makeNativeURL</span><span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="p">{</span><span class="nx">base</span><span class="o">:</span><span class="nx">url</span><span class="p">.</span><span class="nx">base</span><span class="p">,</span> <span class="nx">path</span><span class="o">:</span><span class="nx">path2</span><span class="p">,</span> <span class="nx">query</span><span class="o">:</span><span class="nx">query2</span><span class="p">});</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC72'><span class="p">};</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_wrapTheWrapper</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">impl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">Proxy</span> <span class="o">||</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeProxy</span><span class="p">)</span> <span class="o">?</span> <span class="p">(</span><span class="nx">Proxy</span><span class="p">)</span> <span class="o">?</span> <span class="nx">Proxy</span><span class="p">.</span><span class="nx">createFunction</span><span class="p">({</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// fundamental trap stubs - http://wiki.ecmascript.org/doku.php?id=harmony:proxies</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;getOwnPropertyDescriptor&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{},</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;getPropertyDescriptor&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{},</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;getPropertyNames&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="p">[];</span> <span class="p">},</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;enumerate&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="p">[];</span> <span class="p">},</span>    <span class="c1">// FF4 console likes this derived trap</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;defineProperty&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;fix&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{},</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;get&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">impl</span><span class="p">)</span> <span class="o">:</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeProxy</span><span class="p">.</span><span class="nx">createFunction</span><span class="p">({</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// NOTE: node-proxy has a different set of required handlers than harmony:proxies proposal</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;getOwnPropertyDescriptor&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{},</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;enumerate&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="p">[];</span> <span class="p">},</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;fix&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{},</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;set&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{},</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;get&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">impl</span><span class="p">)</span> <span class="o">:</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_extend</span><span class="p">(</span><span class="nx">impl</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;get&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="s1">&#39;get&#39;</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;put&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="s1">&#39;put&#39;</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;post&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="s1">&#39;post&#39;</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="s1">&#39;delete&#39;</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">},</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;del&#39;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">impl</span><span class="p">(</span><span class="s1">&#39;del&#39;</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC106'><span class="p">};</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeTransport</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_stringForURL</span><span class="p">(</span><span class="nx">request</span><span class="p">),</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url_parts</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;url&#39;</span><span class="p">).</span><span class="nx">parse</span><span class="p">(</span><span class="nx">url</span><span class="p">),</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">textResponse</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">url_parts</span><span class="p">.</span><span class="nx">auth</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO: this is a workaround for https://github.com/joyent/node/issues/2736 and should be removed or hardcoded per its resolution</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s1">&#39;url&#39;</span><span class="p">).</span><span class="nx">parse</span><span class="p">(</span><span class="s2">&quot;http//either%2for@example&quot;</span><span class="p">).</span><span class="nx">auth</span> <span class="o">!==</span> <span class="s2">&quot;either/or&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url_parts</span><span class="p">.</span><span class="nx">auth</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">url_parts</span><span class="p">.</span><span class="nx">auth</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Authorization&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;Basic &#39;</span> <span class="o">+</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="nx">url_parts</span><span class="p">.</span><span class="nx">auth</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="s1">&#39;base64&#39;</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_extend</span><span class="p">(</span><span class="nx">headers</span><span class="p">,</span> <span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">request</span><span class="p">.</span><span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;GET&#39;</span> <span class="o">||</span> <span class="nx">request</span><span class="p">.</span><span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;HEAD&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* XHR ignores data on these requests, so we&#39;ll standardize on that behaviour to keep things consistent. Conveniently, this</span></div><div class='line' id='LC125'><span class="cm">           avoids https://github.com/joyent/node/issues/989 in situations like https://issues.apache.org/jira/browse/COUCHDB-1146 */</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">console</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span><span class="s2">&quot;Ignoring data passed to GET or HEAD request.&quot;</span><span class="p">);</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;utf8&#39;</span><span class="p">);</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO: follow XHR algorithm for charset replacement if Content-Type already set</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;text/plain;charset=UTF-8&quot;</span><span class="p">);</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">textResponse</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">http</span> <span class="o">=</span> <span class="p">(</span><span class="nx">url_parts</span><span class="p">.</span><span class="nx">protocol</span> <span class="o">===</span> <span class="s1">&#39;https:&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;https&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;http&#39;</span><span class="p">);</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">req</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">request</span><span class="p">({</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">host</span><span class="o">:</span> <span class="nx">url_parts</span><span class="p">.</span><span class="nx">hostname</span><span class="p">,</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">port</span><span class="o">:</span> <span class="nx">url_parts</span><span class="p">.</span><span class="nx">port</span><span class="p">,</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span><span class="o">:</span> <span class="nx">request</span><span class="p">.</span><span class="nx">method</span><span class="p">,</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">path</span><span class="o">:</span> <span class="nx">url_parts</span><span class="p">.</span><span class="nx">pathname</span> <span class="o">+</span> <span class="p">(</span><span class="nx">url_parts</span><span class="p">.</span><span class="nx">search</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">),</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span><span class="o">:</span> <span class="nx">headers</span><span class="p">,</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">agent</span><span class="o">:</span> <span class="nx">http</span><span class="p">.</span><span class="nx">globalAgent</span>         <span class="c1">// HACK: allow users some control over connections via e.g. `require(&#39;https&#39;).globalAgent = new CustomAgent()`</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">setHeader</span><span class="p">(</span><span class="s1">&#39;Content-Length&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">setHeader</span><span class="p">(</span><span class="s1">&#39;Content-Length&#39;</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;response&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">responseData</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">prevChunk</span> <span class="o">=</span> <span class="nx">responseData</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responseData</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="nx">prevChunk</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prevChunk</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">responseData</span><span class="p">);</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chunk</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">responseData</span><span class="p">,</span> <span class="nx">prevChunk</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;end&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">textResponse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO: (below too) follow XHR charset algorithm via https://github.com/bnoordhuis/node-iconv</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responseData</span> <span class="o">=</span> <span class="nx">responseData</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="s1">&#39;utf8&#39;</span><span class="p">);</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="nx">res</span><span class="p">.</span><span class="nx">statusCode</span><span class="p">,</span> <span class="nx">headers</span><span class="o">:</span><span class="nx">fermata</span><span class="p">.</span><span class="nx">_normalize</span><span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">headers</span><span class="p">),</span> <span class="nx">data</span><span class="o">:</span><span class="nx">responseData</span><span class="p">});</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;close&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">textResponse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responseData</span> <span class="o">=</span> <span class="nx">responseData</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="s1">&#39;utf8&#39;</span><span class="p">);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Connection dropped (&quot;</span> <span class="o">+</span> <span class="nx">err</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">),</span> <span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="nx">res</span><span class="p">.</span><span class="nx">statusCode</span><span class="p">,</span> <span class="nx">headers</span><span class="o">:</span><span class="nx">fermata</span><span class="p">.</span><span class="nx">_normalize</span><span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">headers</span><span class="p">),</span> <span class="nx">data</span><span class="o">:</span><span class="nx">responseData</span><span class="p">});</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">req</span><span class="p">;</span></div><div class='line' id='LC179'><span class="p">};</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_xhrTransport</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">(),</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_stringForURL</span><span class="p">(</span><span class="nx">request</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="nx">k</span><span class="p">]);</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">DONE</span> <span class="o">||</span> <span class="mi">4</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">status</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">responseHeaders</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getAllResponseHeaders</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;\u000D\u000A&quot;</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">l</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">l</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">l</span> <span class="o">=</span> <span class="nx">l</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;\u003A\u0020&quot;</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responseHeaders</span><span class="p">[</span><span class="nx">l</span><span class="p">[</span><span class="mi">0</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">l</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\u003A\u0020&quot;</span><span class="p">);</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO: when XHR2 settles responseBody vs. response, handle &quot;bytes&quot; siteReq.responseType</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="p">{</span><span class="nx">status</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">headers</span><span class="o">:</span><span class="nx">fermata</span><span class="p">.</span><span class="nx">_normalize</span><span class="p">(</span><span class="nx">responseHeaders</span><span class="p">),</span> <span class="nx">data</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">responseText</span><span class="p">});</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;XHR request failed&quot;</span><span class="p">),</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC207'><span class="p">};</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_stringForURL</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span>        <span class="c1">// url={base:&quot;&quot;,path:[],query:{}}</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">join</span><span class="p">)</span> <span class="o">?</span> <span class="nx">c</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">q</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_flatten</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">query</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">kv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span> <span class="p">((</span><span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">);</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">url</span><span class="p">.</span><span class="nx">base</span> <span class="o">+</span> <span class="nx">p</span> <span class="o">+</span> <span class="p">((</span><span class="nx">q</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;?&#39;</span> <span class="o">+</span> <span class="nx">q</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC217'><span class="p">};</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_flatten</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">q</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">q</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">q</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">k</span> <span class="o">=</span> <span class="nx">k</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">k</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="s1">&#39;$&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">v</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">list</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">k</span><span class="p">,</span> <span class="nx">v</span><span class="p">]);</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">list</span><span class="p">;</span></div><div class='line' id='LC234'><span class="p">};</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_unflatten</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">l</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">l</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">kv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">kv</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="p">{}.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="o">?</span> <span class="p">[].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">k</span><span class="p">],</span> <span class="nx">v</span><span class="p">)</span> <span class="o">:</span> <span class="nx">v</span><span class="p">;</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC243'><span class="p">};</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_normalize</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">headers_norm</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">headers</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">k_norm</span> <span class="o">=</span> <span class="nx">k</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;-&#39;</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">w</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">w</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">+</span> <span class="nx">w</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;-&#39;</span><span class="p">);</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers_norm</span><span class="p">[</span><span class="nx">k_norm</span><span class="p">]</span> <span class="o">=</span> <span class="nx">headers</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">headers_norm</span><span class="p">;</span></div><div class='line' id='LC254'><span class="p">};</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_extend</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">source</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC261'><span class="p">};</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_typeof2</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">o</span><span class="p">))</span> <span class="o">?</span> <span class="s1">&#39;array&#39;</span> <span class="o">:</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span></div><div class='line' id='LC265'><span class="p">};</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_useExports</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_transport</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeTransport</span><span class="p">;</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;oauth&#39;</span><span class="p">,</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;./oauth&quot;</span><span class="p">).</span><span class="nx">init</span><span class="p">(</span><span class="nx">fermata</span><span class="p">));</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">Proxy</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeProxy</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;node-proxy&#39;</span><span class="p">);</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">registerPlugin</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">plugins</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">plugins</span><span class="p">;</span></div><div class='line' id='LC277'><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_transport</span> <span class="o">=</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_xhrTransport</span><span class="p">;</span></div><div class='line' id='LC279'><span class="p">}</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;_base&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC284'><span class="cm">     this = baseURL = {base, path, query}</span></div><div class='line' id='LC285'><span class="cm">     request = {base, method, path, query, headers, data}</span></div><div class='line' id='LC286'><span class="cm">     callback = function(error, response)</span></div><div class='line' id='LC287'><span class="cm">     response = {status, headers, data}</span></div><div class='line' id='LC288'><span class="cm">    */</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_transport</span><span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC292'><span class="p">});</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;raw&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="nx">config</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_extend</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">config</span><span class="p">);</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">;</span></div><div class='line' id='LC297'><span class="p">});</span></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;statusCheck&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">transport</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">err</span> <span class="o">&amp;&amp;</span> <span class="nx">response</span><span class="p">.</span><span class="nx">status</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">()[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="s1">&#39;2&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">err</span> <span class="o">=</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Bad status code from server: &quot;</span> <span class="o">+</span> <span class="nx">response</span><span class="p">.</span><span class="nx">status</span><span class="p">);</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">err</span><span class="p">.</span><span class="nx">status</span> <span class="o">=</span> <span class="nx">response</span><span class="p">.</span><span class="nx">status</span><span class="p">;</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC309'><span class="p">});</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'><span class="c1">// see http://www.w3.org/TR/html5/association-of-controls-and-forms.html#multipart-form-data</span></div><div class='line' id='LC312'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeMultipartEncode</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">segno</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="mi">1</span><span class="nx">e16</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="mi">1</span><span class="nx">e16</span><span class="p">);</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="s2">&quot;; boundary=&quot;</span> <span class="o">+</span> <span class="nx">segno</span><span class="p">);</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">push</span><span class="p">(</span><span class="nx">l</span><span class="p">)</span> <span class="p">{</span>      <span class="c1">// NOTE: Fermata simply isn&#39;t gonna win at humongous transfers.</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">prevBuffer</span> <span class="o">=</span> <span class="nx">buffer</span><span class="p">,</span> <span class="nx">newBuffer</span> <span class="o">=</span> <span class="p">(</span><span class="nx">l</span> <span class="k">instanceof</span> <span class="nx">Buffer</span><span class="p">)</span> <span class="o">?</span> <span class="nx">l</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="o">+</span><span class="nx">l</span><span class="p">);</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="nx">prevBuffer</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="nx">newBuffer</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prevBuffer</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">buffer</span><span class="p">);</span> <span class="nx">newBuffer</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="nx">buffer</span><span class="p">,</span> <span class="nx">prevBuffer</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s2">&quot;\r\n&quot;</span><span class="p">,</span> <span class="nx">buffer</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">q</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">s</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;|&quot;/g</span><span class="p">,</span> <span class="s2">&quot;%22&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r\n|\r|\n/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_flatten</span><span class="p">(</span><span class="nx">data</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">kv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s2">&quot;--&quot;</span> <span class="o">+</span> <span class="nx">segno</span><span class="p">);</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">({}.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="s1">&#39;data&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">file</span> <span class="o">=</span> <span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s2">&quot;Content-Disposition: form-data; name=&quot;</span> <span class="o">+</span> <span class="nx">q</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">+</span> <span class="s2">&quot;; filename=&quot;</span> <span class="o">+</span> <span class="nx">q</span><span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">name</span> <span class="o">||</span> <span class="s2">&quot;blob&quot;</span><span class="p">));</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s2">&quot;Content-Type: &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">type</span> <span class="o">||</span> <span class="s2">&quot;application/octet-stream&quot;</span><span class="p">));</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s2">&quot;Content-Disposition: form-data; name=&quot;</span> <span class="o">+</span> <span class="nx">q</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">(</span><span class="s2">&quot;--&quot;</span> <span class="o">+</span> <span class="nx">segno</span> <span class="o">+</span> <span class="s2">&quot;--&quot;</span><span class="p">);</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC340'><span class="p">};</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'><span class="nx">fermata</span><span class="p">.</span><span class="nx">_xhrMultipartEncode</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FormData</span><span class="p">();</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fermata</span><span class="p">.</span><span class="nx">_flatten</span><span class="p">(</span><span class="nx">data</span><span class="p">).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">kv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">form</span><span class="p">;</span></div><div class='line' id='LC348'><span class="p">};</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;autoConvert&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="nx">defaultType</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">TYPES</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;text/plain&quot;</span> <span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">d</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">d</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;application/json&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">,</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;application/x-www-form-urlencoded&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// see http://www.w3.org/TR/html5/association-of-controls-and-forms.html#application-x-www-form-urlencoded-encoding-algorithm</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_flatten</span><span class="p">(</span><span class="nx">data</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">kv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">0</span><span class="p">]).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="s1">&#39;+&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">kv</span><span class="p">[</span><span class="mi">1</span><span class="p">]).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="s1">&#39;+&#39;</span><span class="p">);</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">);</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_unflatten</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">kv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">kv</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\+/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">));</span> <span class="p">});</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}));</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">],</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;multipart/form-data&quot;</span><span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">fermata</span><span class="p">.</span><span class="nx">_transport</span> <span class="o">===</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_xhrTransport</span><span class="p">)</span> <span class="o">?</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_xhrMultipartEncode</span> <span class="o">:</span> <span class="nx">fermata</span><span class="p">.</span><span class="nx">_nodeMultipartEncode</span><span class="p">,</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">null</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">defaultType</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">method</span> <span class="o">!==</span> <span class="s1">&#39;GET&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">request</span><span class="p">.</span><span class="nx">method</span> <span class="o">!==</span> <span class="s1">&#39;HEAD&#39;</span><span class="p">)</span>  <span class="c1">// setting Content-Type triggers CORS pre-flight, avoid when data isn&#39;t sent</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">defaultType</span><span class="p">);</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Accept&#39;</span><span class="p">]</span> <span class="o">||</span> <span class="p">(</span><span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Accept&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">defaultType</span><span class="p">);</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reqType</span> <span class="o">=</span> <span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">],</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encoder</span> <span class="o">=</span> <span class="p">(</span><span class="nx">TYPES</span><span class="p">[</span><span class="nx">reqType</span><span class="p">]</span> <span class="o">||</span> <span class="p">[])[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">encoder</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">request</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">request</span><span class="p">.</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">encoder</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="nx">request</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">(</span><span class="nx">request</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">accType</span> <span class="o">=</span> <span class="nx">request</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Accept&#39;</span><span class="p">],</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resType</span> <span class="o">=</span> <span class="nx">response</span> <span class="o">&amp;&amp;</span> <span class="nx">response</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">],</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">decoder</span> <span class="o">=</span> <span class="p">(</span><span class="nx">TYPES</span><span class="p">[</span><span class="nx">accType</span><span class="p">]</span> <span class="o">||</span> <span class="nx">TYPES</span><span class="p">[</span><span class="nx">resType</span><span class="p">]</span> <span class="o">||</span> <span class="p">[])[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">decoder</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">response</span> <span class="o">=</span> <span class="nx">decoder</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">response</span><span class="p">,</span> <span class="nx">response</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">err</span> <span class="o">||</span> <span class="p">(</span><span class="nx">err</span> <span class="o">=</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC403'><span class="p">});</span></div><div class='line' id='LC404'><br/></div><div class='line' id='LC405'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;json&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="nx">baseURL</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span> <span class="o">=</span> <span class="nx">baseURL</span><span class="p">;</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">.</span><span class="nx">using</span><span class="p">(</span><span class="s1">&#39;statusCheck&#39;</span><span class="p">).</span><span class="nx">using</span><span class="p">(</span><span class="s1">&#39;autoConvert&#39;</span><span class="p">,</span> <span class="s2">&quot;application/json&quot;</span><span class="p">);</span></div><div class='line' id='LC408'><span class="p">});</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'><span class="c1">// TODO: remove this completely before any 1.0 release</span></div><div class='line' id='LC412'><span class="nx">fermata</span><span class="p">.</span><span class="nx">registerPlugin</span><span class="p">(</span><span class="s1">&#39;api&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">transport</span><span class="p">,</span> <span class="nx">temp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">correctURL</span> <span class="o">=</span> <span class="nx">temp</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">temp</span><span class="p">.</span><span class="nx">user</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">correctURL</span> <span class="o">=</span> <span class="nx">correctURL</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\/(\w)/</span><span class="p">,</span> <span class="s1">&#39;//&#39;</span> <span class="o">+</span> <span class="nx">temp</span><span class="p">.</span><span class="nx">user</span> <span class="o">+</span> <span class="s1">&#39;:PASSWORD@$1&#39;</span><span class="p">);</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">console</span> <span class="o">&amp;&amp;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">)</span> <span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span><span class="s2">&quot;Using deprecated API: please initialize with `fermata.json(\&quot;&quot;</span> <span class="o">+</span> <span class="nx">correctURL</span> <span class="o">+</span> <span class="s2">&quot;\&quot;)` instead. This plugin will be disabled soon!&quot;</span><span class="p">);</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">base</span> <span class="o">=</span> <span class="nx">correctURL</span><span class="p">;</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transport</span><span class="p">.</span><span class="nx">using</span><span class="p">(</span><span class="s1">&#39;statusCheck&#39;</span><span class="p">).</span><span class="nx">using</span><span class="p">(</span><span class="s1">&#39;autoConvert&#39;</span><span class="p">,</span> <span class="s2">&quot;application/json&quot;</span><span class="p">);</span></div><div class='line' id='LC420'><span class="p">});</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.07582s from github-fe114-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/natevw/fermata/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

