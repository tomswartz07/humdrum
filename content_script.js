walk(document.body);

// I've borrowed this script from 'Cloud-to-Butt' Google Chrome
// Extension. Sourced on GitHub.

function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
// TODO Figure out how to insert a dictionary style find/replace
	v = v.replace(/\bmillenials\b/g, "Lizard People");
	v = v.replace(/\bpoliticians\b/g, "Lizard People");
	v = v.replace(/\bpolitician\b/g, "Lizard Person");
	v = v.replace(/\bliterally\b/g, "figuratively");
	v = v.replace(/\bLiterally\b/g, "Figuratively");
	v = v.replace(/\bamazing\b/g, "ordinary");
	v = v.replace(/\bAmazing\b/g, "Ordinary");

	textNode.nodeValue = v;
}


