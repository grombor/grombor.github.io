<?php
session_start();

// Check if the user is logged in.

if(!isset($_SESSION['username']) || !isset($_SESSION['logged'])){
    //User not logged in. Redirect them back to the login.php page.
    header('Location: index.php');
    exit;
}
else {
  // Set up connection to DB
  require_once "connect.php";
  // Make a query
  $stmt = $pdo->prepare("SELECT * FROM tasks WHERE user_id = ?");
  $stmt -> execute([$_SESSION["user_id"]]);
  $result = $stmt -> fetchAll();
  // Run function to print rows
    require_once "code.php";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"><!-- Bootstrap CSS -->
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"><!-- My CSS -->
	<link href="css/my.css" rel="stylesheet">
	<title>Hello <?php echo $_SESSION['username'];?></title>
</head>
<body>
	<div class="container">
		<!-- Navbar -->
		<nav class="navbar fixed-top navbar-dark">
			<span>You are logged in as <?php echo "<b>".$_SESSION['username']."</b>" ?></span> <a href="https://poczta.nazwa.pl/" target="_blank">My mail</a> <!-- Modal trigger -->
			 <a data-target="#exampleModal" data-toggle="modal" href="">OddsCalc</a> <!-- Dropdown -->
			<div class="dropdown show">
				<a aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" href="#" id="dropdownMenuLink" role="button">My Tools</a>
				<div aria-labelledby="dropdownMenuLink" class="dropdown-menu">
					<a class="dropdown-item" href="http://www.colorzilla.com/gradient-editor/" target="_blank">CSS Gradient</a>
          <a class="dropdown-item" href="https://www.10bestdesign.com/dirtymarkup/" target="_blank">HTML Beautifier</a>
          <a class="dropdown-item" href="https://css3gen.com/box-shadow/" target="_blank">CSS BoxShadow Generator</a>
				</div>
			</div><!-- EODropdown -->
			 <a class="navbar-brand" href="logout.php">| Log out</a>
		</nav><!-- Modal -->
		<div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="exampleModal" role="dialog" tabindex="-1">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">OddsCalc</h5><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
					</div>
					<div class="modal-body">
						<div>
							<form>
								<input id="input1" placeholder="Fractional ex. 2/1" type="text"> <input id="input2" placeholder="Decimal ex. 2.5" type="text"> <input id="input3" placeholder="Americam +350" type="text"> <input id="calculate" type="button" value="Calculate"> <input id="reset" type="reset" value="Reset">
							</form>
							<p><span class="output">&nbsp;</span></p>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
					</div>
				</div>
			</div>
		</div>
		<h4 class="my-5 pt-5">To do list:</h4><a class="btn btn-sm btn-outline-secondary" href="add.php">Add new task</a> <!-- Start table -->
		<div class="table-responsive">
			<table class="table table-dark mt-5">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Date</th>
						<th scope="col">Content</th>
						<th scope="col">Link</th>
						<th scope="col">Progress</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<?php printRow($result);?>
				</tbody>
			</table>
		</div><!-- end table -->
	</div><!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js">
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js">
	</script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js">
	</script> <!-- Optional JavaScript -->

	<script src="/php/js/master.js">
	</script>
</body>
</html>
