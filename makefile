.PHONY: update

update:
	@git add .
	@git commit -m "update site"
	@git push origin source
